import {  Typography } from "@mui/material"
import { BoxProfile, ProfileContainer } from "./styles"
import user from '../../Assets/images/user.png'



const ProfilePage = () => {
    return(
        // Create profile page here using MUI
        <ProfileContainer
            container

        >
            <BoxProfile>
                <div className="user-logo">
                    <img src={user} alt="" />
                    <Typography variant="body1" >Tiago Silva</Typography>
                </div>
                <div className="user-grid">
                    <div className="user-grid-item">
                        <Typography variant="body1" >Microtarefas Realizadas</Typography>

                        {/* create paragraph here */}
                        <Typography variant="subtitle1" >
                            Expert React JS
                        </Typography>

                    </div>
                    <div className="user-grid-item">
                        <Typography variant="body1" >Formação</Typography>

                        {/* create paragraph here */}
                        <Typography variant="subtitle1" >
                            Formado em Ciência da Computação pela Universidade Federal de Minas Gerais
                        </Typography>
                    </div>
                    <div className="user-grid-item">
                        <Typography variant="body1" >Experiencia</Typography>
                        <Typography variant="subtitle1" >
                            2 anos de experiência com desenvolvimento web
                        </Typography>



                    </div>
                    
                         
                   
                </div>
               

            </BoxProfile>





        </ProfileContainer>


    )
}

export default ProfilePage