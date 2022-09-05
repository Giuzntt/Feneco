import { BannerHeader, LandingContent, MainContent } from "./styles";
import Logo from "../../Assets/images/slogan.jpg";
import { Link } from "react-router-dom";
import { FaCheck, FaRegChartBar} from "react-icons/fa";


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
              <div className="content-item-icon">
                <FaCheck className="icon" />
              </div>
              <div className="content-item-text">
                <h3>Comprove os seus conhecimentos</h3>
                <p>
                  Com o nosso sistema você pode comprovar os seus conhecimentos
                  e mostrar para as empresas que você é o candidato ideal para a
                  vaga.
                </p>
              </div>
            </div>
            <div className="content-item">
              <div className="content-item-icon">
                <FaRegChartBar className="icon" />
              </div>
              <div className="content-item-text">
                <h3>Otimização do trabalho</h3>
                <p>
                  Chega de receber dezenas de curriculos e não receber aquele
                  candidato que você tanto queria.
                </p>
              </div>
            </div>
          </div>
        </MainContent>

        <div className="title-main">
          <hr />
          <h1>O Processo seletivo de uma nova forma </h1>
          <hr />
        </div>
      </LandingContent>
    );
}