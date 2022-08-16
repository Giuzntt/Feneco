import { Link } from "react-router-dom";
import { ContainerHeader } from "./styles";
import Logo from "../../Assets/logo.svg";


// Create component header
export default function Header() {
    return (
      <ContainerHeader>
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="Imagem Logo" />
          </Link>
          <ul>
            <Link to={"/Landing"}>
              <li> Quem somos nos</li>
            </Link>
            <Link to={"/Contato"}>
              <li>Contato</li>
            </Link>
            <Link to={"/Login"}>
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </ContainerHeader>
    );
    }