import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { BoxHeader, GridContentPanel } from "./styles";








const PanelPage = () =>{
    return (
        <>
            <Typography variant="h4" component="h1" 
            sx={{textAlign: "center", marginTop: "2rem", fontFamily:"Open Sans", fontWeight: "bold", color: "#929090"}}>Panel</Typography>
        <BoxHeader>


                <Button variant="contained" color="primary"
                
                startIcon={<FaPlus />}

                >
                    Adicionar Vaga
                </Button>

            
        </BoxHeader>
            
        <GridContentPanel container>
            

            {/* create Button create  job */}
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Nome da vaga
                            <Typography variant="body1" >
                                Desenvolvedor Front-end
                            </Typography>
                        </Typography>
                        


                        <Typography variant="h5"
                            component="div"
                        >
                            Data
                            <Typography variant="body1">
                                10/10/2021

                            </Typography>
                        </Typography>
                        <Typography variant="h5"
                            component="div"
                        >
                            Descrição da vaga
                            <Typography variant="body1">
                                Desenvolvedor Front-end com experiência em ReactJS, NextJS, Typescript, Material UI, Styled Components, entre outras tecnologias.

                            </Typography>
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained' >EDITAR</Button>
                        <Button size="small" variant='contained'>TAREFAS</Button>
                        <Button size="small" variant='contained'>EXCLUIR</Button>
                    </CardActions>
                </Card>
          



        </GridContentPanel>
        </>
    );
}


export default PanelPage
