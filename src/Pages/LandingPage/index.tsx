import { BannerHeader, LandingContent } from "./styles";
import Logo from "../../Assets/logo.svg";


export default function LandingPage(){
    return(
        
        <LandingContent>
            <BannerHeader>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="content-banner">
                    <h1>Feneco</h1>
                    <p>
                        Aplicativo para gerenciamento de conteúdo para o site da Feneco.
                    </p>


                    <button>ENTRE AQUI</button>    
                </div>

                
            </BannerHeader>   
        </LandingContent>
    
        
    )
}