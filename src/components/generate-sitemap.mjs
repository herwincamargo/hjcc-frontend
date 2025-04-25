import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { SitemapStream } from 'sitemap';

dotenv.config();  // Cargar las variables de entorno desde .env

// Conexión a la base de datos con SSL habilitado
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,  // Requiere conexión SSL
      rejectUnauthorized: false,  // Permite aceptar el certificado del servidor (en caso de que sea auto-firmado)
    },
  },
});

// Definir modelo de solicitudes
const Solicitud = sequelize.define('Solicitud', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  urlSlug: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: false });

// Función para generar el sitemap
const generateSitemap = async () => {
  try {
    // Conectar a la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa!');

    // Obtener todas las solicitudes
    const solicitudes = await Solicitud.findAll();
    const urls = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/solicitudes', changefreq: 'daily', priority: 0.8 },
      // Agrega otras URLs estáticas que necesites
    ];

    // Agregar las URLs dinámicas de las solicitudes
    solicitudes.forEach(solicitud => {
      urls.push({
        url: `/solicitudes/${solicitud.urlSlug}`,
        changefreq: 'daily',
        priority: 0.7,
      });
    });

    // Ruta de salida para el sitemap.xml en la carpeta dist/
    const outputPath = path.join(process.cwd(), 'dist', 'sitemap.xml');  // Usamos process.cwd() para obtener el directorio actual

    // Crear un sitemap con el hostname
    const sitemap = new SitemapStream({ hostname: 'https://www.hjcc.com.co' });

    // Escribir las URLs al sitemap
    urls.forEach(({ url, changefreq, priority }) => {
      sitemap.write({ url, changefreq, priority });
    });

    sitemap.end();

    // Usar un stream para recolectar los datos generados
    const chunks = [];
    sitemap.on('data', (chunk) => {
      chunks.push(Buffer.from(chunk)); // Convertir a Buffer antes de agregar al array
    });

    sitemap.on('end', () => {
      const xmlBuffer = Buffer.concat(chunks);
      fs.writeFileSync(outputPath, xmlBuffer); // Escribir el archivo
      console.log('Sitemap.xml generado en:', outputPath);
    });
  } catch (error) {
    console.error('Error al generar el sitemap:', error);
  }
};

// Ejecutar la generación del sitemap
generateSitemap();
