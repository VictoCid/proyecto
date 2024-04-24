// Importación de componentes
import LoginForm from './registro-formulario'; // Componente del formulario de inicio de sesión
 
// Componente de la página de inicio de sesión
export default function LoginPage() {
  return (
    // Contenedor principal
    <main>
      <div>
        <LoginForm /> {/* Renderizado del formulario de inicio de sesión */}
      </div>
    </main>
  );
}