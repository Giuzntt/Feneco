import { Link } from "react-router-dom";
import { ContainerHeader } from "./styles";
import Logo from "../../Assets/logo.svg";

interface HeaderProps{
    isLogged: boolean;
}




// Create component header
export default function Header({ isLogged}: HeaderProps) {
    return (
      <ContainerHeader>
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="Imagem Logo" />
          </Link>
          <ul>
            {
              isLogged=== false ? (
                <>
                  <Link to={"/"}>
                    <li> Quem somos nos</li>
                  </Link>
                  <Link to={"/Contato"}>
                    <li>Contato</li>
                  </Link>
                  <Link to={"/Login"}>
                    <li>Login</li>
                  </Link>
                  
                </>
              ):(
                <>
                    <Link to={"/"}>
                      <li> Vagas</li>
                    </Link>
                    <Link to={"/Contato"}>
                      <li>Microtarefas</li>
                    </Link>
                    <Link to={"/Login"}>
                      <li>Meu Perfil</li>
                    </Link>
                    <Link to={"/"}>
                      <li>Sair</li>
                    </Link>
                
                </>
              )

            }
         
          </ul>
        </div>
      </ContainerHeader>
    );
    }

    
