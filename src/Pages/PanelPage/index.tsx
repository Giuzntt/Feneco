import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useVagas } from "../../Hooks/useVagas";
import { BoxHeader, GridContentPanel } from "./styles";








const PanelPage = () =>{

    const { vagas, deleteJob } = useVagas()

    async function deleteVaga(id: string | undefined) {

        await deleteJob(id)
    }


    return (
        <>
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'Open Sans', fontWeight: 'bold', color: '#929090' }}>
                Panel
            </Typography>
            <BoxHeader>
                <Link to="/create">
                    <Button variant="contained" color="primary" startIcon={<FaPlus />} >
                        Adicionar Vaga
                    </Button>
                </Link>
            </BoxHeader>

            <GridContentPanel container>
            
                {
                    vagas.map((vaga , index) => {
                        return(
                            <>
                                <Card sx={{ minWidth: 275 }} key={index}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Nome da vaga
                                            <Typography variant="body1">{vaga.nomeVaga}</Typography>
                                        </Typography>

                                        <Typography variant="h5" component="div">
                                            Tipo Vaga
                                            <Typography variant="body1">{vaga.tipoVaga}</Typography>
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Descrição da vaga
                                            <Typography variant="body1">{vaga.descricao}</Typography>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained">
                                            EDITAR
                                        </Button>
                                        <Button size="small" variant="contained">
                                            TAREFAS
                                        </Button>
                                        <Button size="small" variant="contained"
                                            onClick={() => deleteVaga(vaga.id)}
                                        >
                                            EXCLUIR
                                        </Button>
                                    </CardActions>
                                </Card>
                            </>
                        )

                    }
                    )   
                  
                }

                
            </GridContentPanel>
        </>
    );
}


export default PanelPage
