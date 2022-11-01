import { FooterContainer, FooterContent } from "./styles";
import logo from "../../Assets/logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={logo} alt="Imagem logo do footer" />

        <p>© 2022 - Todos os direitos reservados</p>

        <ul>
          <li>
            <FaInstagram />
          </li>
          <li>
            
            <FaLinkedin />
          </li>
          <li>
           
            <FaFacebook />
          </li>
        </ul>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;