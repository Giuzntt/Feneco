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
                    <Typography variant="body1">FIAP</Typography>
                </div>
                <div className="user-grid">
                    <div className="user-grid-item">
                        <Typography variant="body1">Sobre a Empresa</Typography>

                        {/* create paragraph here */}
                        <Typography variant="subtitle1">
                            A Fiap é uma empresa de tecnologia com foco em educação, que usa tecnologias emergentes para criar experiências de aprendizado únicas. A Fiap acredita que a tecnologia,
                            ciência e inovação são os grandes vetores de transformação do amanhã e promove continuamente a cultura do conhecimento contínuo, ágil e personalizável entre seus mais de
                            10.000 alunos, cursos de Graduação e MBAs.
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
                        Somos mais de 1.000 agentes de transformação colaborando com o futuro da educação, espalhados pelos principais centros de negócios de São Paulo. Temos espírito empreendedor.
                        Assumimos riscos, somos ágeis e atuamos de forma criativa para entregar resultados. Além disso, acreditamos em um futuro de disrupção por meio da tecnologia.
                    </Typography>
                </div>
               
            </BoxContentProfile>
        </ProfileContainer>
    );
}

export default ProfileCompany;