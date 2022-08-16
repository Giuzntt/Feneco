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
            <Link to={"/"}>
              <li> Quem somos nos</li>
            </Link>
            <Link to={"/search"}>
              <li>Contato</li>
            </Link>
          </ul>
        </div>
      </ContainerHeader>
    );
    }