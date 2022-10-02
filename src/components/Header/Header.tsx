import { Link } from "react-router-dom";
import { ContainerHeader } from "./styles";
import Logo from "../../Assets/logo.svg";

interface HeaderProps{
    isLogged: boolean;
    isPanel?: boolean;
}




// Create component header
export default function Header({ isLogged, isPanel }: HeaderProps) {
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
                    <li> Nossa empresa</li>
                  </Link>
                  
                  <Link to={"/Login"}>
                    <li>Login</li>
                  </Link>
                  
                </>
              ):(
                <>{

                    isPanel === true ? (
                        <>
                          <Link to={"/vagas"}>
                            <li> Vagas</li>
                          </Link>
                          <Link to={"/microtarefas"}>
                            <li>Microtarefas</li>
                          </Link>
                          <Link to={"/perfil"}>
                            <li>Perfil</li>
                          </Link>
                          <Link to={"/"}>
                            <li>Sair</li>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to={"/panel"}>
                            <li> Painel</li>
                          </Link>
                          <Link to={"/perfil-company"}>
                            <li>Perfil</li>
                          </Link>
                          <Link to={"/"}>
                            <li>Sair</li>
                          </Link>
                        </>
                      )

                    }


                
                
                </>
              )

            }
         
          </ul>
        </div>
      </ContainerHeader>
    );
    }

    
