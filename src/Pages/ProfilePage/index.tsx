import {  Box, Tab, Tabs, Typography } from "@mui/material"
import { BoxContentProfile, BoxProfile, ProfileContainer } from "./styles"
import user from '../../Assets/images/user.png'



const ProfilePage = () => {
    return (
        // Create profile page here using MUI
        <ProfileContainer container>
            <BoxProfile>
                <div className="user-logo">
                    <img src={user} alt="" />
                    <Typography variant="body1">Tiago Silva</Typography>
                </div>
                <div className="user-grid">
                    <div className="user-grid-item">
                        <Typography variant="body1">Microtarefas Realizadas</Typography>

                        {/* create paragraph here */}
                        <Typography variant="subtitle1">Fundamentos em JavaScript</Typography>
                    </div>
                    <div className="user-grid-item">
                        <Typography variant="body1">Formação</Typography>

                        {/* create paragraph here */}
                        <Typography variant="subtitle1">Cursando  Ciência da Computação pela Universidade Federal de Minas Gerais</Typography>
                    </div>
                    <div className="user-grid-item">
                        <Typography variant="body1">Experiencia</Typography>
                        <Typography variant="subtitle1">Iniciando no mercado de trabalho</Typography>
                    </div>
                </div>
            </BoxProfile>
            <BoxContentProfile>
          

                <div className="user-description">
                    <Typography variant="h5">
                        {' '}
                        <hr />
                        Sobre mim
                        <hr />
                    </Typography>
                    <Typography variant="subtitle1">Tenho sonho de ser um grande programador, e estou em busca de novos conhecimentos.</Typography>
                    

                    
                </div>
                <hr />
                <div className="user-description">
                    <Typography variant="h5">Treinamentos Exclusivos</Typography>
                    <ul>
                        <li>
                            <Typography variant="subtitle1">Treinamento em JavaScript</Typography>
                        </li>
                    </ul>
                </div>
            </BoxContentProfile>
        </ProfileContainer>
    );
}

export default ProfilePage