import { BannerHeader, LandingContent, MainContent, ProductContent } from "./styles";
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
                  Ser avaliado com base nas microtarefas, facilitando ao
                  recrutador eliminando perdas e otimizando processo.
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
        <ProductContent>
          <div className="title-product">
            <hr />
            <h1>Processo seletivo unico </h1>
            <hr />
          </div>
          <h2>
            Chega de ficar em último lugar, seu lugar é aqui com{" "}
            <p>Feneco Talents</p>
          </h2>
          <div className="content-product">
            <div className="content-product-item">
              <div className="content-product-header">
                <h3>1</h3>
              </div>
              <div className="content-description">
                <h3>Se cadastre</h3>
                <p>
                  Cadastre-se e crie seu perfil, para que possamos te conhecer
                  melhor.
                </p>
              </div>
              <button>
                ENTRAR COMO CANDIDATO
              </button>
            </div>
            <div className="content-product-item">
              <div className="content-product-header">
                <h3>1</h3>
              </div>
              <div className="content-description">
                <h3>Se cadastre</h3>
                <p>
                  Cadastre-se e crie seu perfil, para que possamos te conhecer
                  melhor.
                </p>
              </div>
              <button>
                ENTRAR COMO CANDIDATO
              </button>
            </div>
          </div>
        </ProductContent>
      </LandingContent>
    );
}