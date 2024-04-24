// Importación de componentes
import Elperfil from './carro'; // Componente del formulario de inicio de sesión
 
// Componente de la página de inicio de sesión
export default function LoginPage() {
  return (
    // Contenedor principal
    <main>
      <div>
        <Elperfil /> {/* Renderizado del formulario de inicio de sesión */}
      </div>
    </main>
  );
}