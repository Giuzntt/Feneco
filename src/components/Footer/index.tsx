import { FooterContainer, FooterContent } from "./styles";
import logo from "../../Assets/logo2.svg";
import logo2 from '../../Assets/EY_logo_2019.svg';


const Footer = (): JSX.Element => {
  return (
      <FooterContainer>
          <FooterContent>
              <img src={logo} alt="Imagem logo do footer" />

              <p>© 2022 - Todos os direitos reservados</p>

              <img src={logo2} alt="Imagem logo do footer" />
          </FooterContent>
      </FooterContainer>
  );
};

export default Footer;
