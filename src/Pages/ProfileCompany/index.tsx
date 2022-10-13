import {  Typography } from "@mui/material"
import { BoxContentProfile, BoxProfile, ProfileContainer } from "./styles"
import user from '../../Assets/images/fiaplogo.png';



const ProfileCompany = () => {
    return (
        // Create profile page here using MUI
        <ProfileContainer container>
            <BoxProfile>
                <div className="user-logo">
                    <img src={user} alt="" />
                    <Typography variant="body1">EY</Typography>
                </div>
                <div className="user-grid">
                    <div className="user-grid-item">
                        <Typography variant="body1">Sobre a Empresa</Typography>

                        {/* create paragraph here */}
                        <Typography variant="subtitle1">
                            As mudanças demográficas e as novas tecnologias estão mudando a forma, o porquê e onde as pessoas trabalham, além dos requisitos e das expectativas da força de trabalho.
                            Para garantir as habilidades que solicitam, as organizações precisam de uma nova abordagem para atrair, desenvolver e inspirar seus trabalhadores.
                        </Typography>
                    </div>
                </div>
            </BoxProfile>
            <BoxContentProfile>
                <div className="user-description">
                    <Typography variant="h5">
                        {' '}
                        <hr />
                        Mais sobre a empresa
                        <hr />
                    </Typography>
                    <Typography variant="subtitle1">
                        Os processos, sistemas e políticas utilizados pelas empresas para apoiar a sua força de trabalho são frequentemente complexos e fragmentados. No entanto, os trabalhadores de
                        hoje - que variam de baby boomers a millennials, funcionários em tempo integral a contratados e freelancers - esperam cada vez mais uma interface que reflita a experiência de
                        seus clientes: simples, transparente e móvel.
                    </Typography>
                </div>
            </BoxContentProfile>
        </ProfileContainer>
    );
}

export default ProfileCompany;