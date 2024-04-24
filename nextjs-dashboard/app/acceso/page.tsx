// Importación de componentes
import LoginForm from '@/app/acceso/acceso-formulario'; // Componente del formulario de inicio de sesión
 
// Componente de la página de inicio de sesión
export default function LoginPage() {
  return (
    // Contenedor principal
    <main className="flex items-center justify-center md:h-screen">
      {/* Contenedor interno */}
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        {/* Encabezado con el logo de Acme */}
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
          </div>
        </div>
        {/* Formulario de inicio de sesión */}
        <LoginForm /> {/* Renderizado del formulario de inicio de sesión */}
      </div>
    </main>
  );
}