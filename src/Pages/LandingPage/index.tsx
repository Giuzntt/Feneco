import { BannerHeader, LandingContent, MainContent } from "./styles";
import Logo from "../../Assets/images/slogan.jpg";
import { Link } from "react-router-dom";
import { FaCheck, FaAccessibleIcon} from "react-icons/fa";


export default function LandingPage(){
    return (
      <LandingContent>
        <BannerHeader>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="content-banner">
            <h1>Cansou de ser reprovado na primeira fase?</h1>
            <p className="subtitle">
              É muito chato receber a mensagem de um robô, quando nem se quer
              olharam para você...
            </p>

            <button>Quero criar meu perfil</button>

            <p className="subtitle">
              Caso você seja uma empresa?
              <Link to="/Login" className="text-link">
                Não fique de fora, venha nos conhecer!
              </Link>
            </p>
          </div>
          src/Pages/LandingPage/styles.ts
        </BannerHeader>
        <MainContent>
          <div className="title-main">
            <hr />
            <h1>Nosso diferencial</h1>
            <hr />
          </div>
          <div className="content-main">
            <div className="content-item">
              <div className="content-item-icon"><FaAccessibleIcon/></div>
            </div>
            <div className="content-item">
              <div className="content-item-icon">
                <FaCheck className="icon"/>
              </div>
            </div>
          </div>
        </MainContent>
      </LandingContent>
    );
}