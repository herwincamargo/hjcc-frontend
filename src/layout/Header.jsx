const Header = () => {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">HJCC</h1>
        <div className="space-x-4 text-sm">
          <button className="text-blue-600 hover:underline">Iniciar sesión</button>
          <button className="text-blue-600 hover:underline">Registrarse</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
