import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import {  FaEye, FaPen, FaPlus, FaRegChartBar, FaTrash, FaUserTie } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useVagas } from "../../Hooks/useVagas";
import { BoxHeader, GridContentPanel, StatusContainer } from "./styles";
import {useLayoutEffect } from "react";

const PanelPage = () =>{

    const { vagas, deleteJob, loadVagas } = useVagas()

    // create array list state  to save the data from the api

  

    let navigate = useNavigate()

    useLayoutEffect(() => {
        loadVagas()
    }, [])
        

    async function deleteVaga(id: string | undefined) {

        await deleteJob(id)
    }


    return (
        <>
            <StatusContainer>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Vagas
                        </Typography>

                        <Typography variant="h6">{vagas.length}</Typography>
                        <FaRegChartBar className="icon" />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Candidatos
                        </Typography>
                        <Typography variant="h6">0</Typography>
                        <FaUserTie className="icon" />
                    </CardContent>
                </Card>
            </StatusContainer>
            <BoxHeader>
                <Link
                    to="/create/"
                    style={{
                        textDecoration: 'none',
                        color: '#fff',
                        display: 'flex',
                        gap: '0.5rem'
                    }}
                >
                    <Button variant="contained" startIcon={<FaPlus />}>
                        Adicionar Vaga
                    </Button>
                </Link>
            </BoxHeader>
            <GridContentPanel container>
                {vagas.length === 0 ? (
                    <Typography variant="h4" component="h1" sx={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'Open Sans', fontWeight: 'bold', color: '#929090' }}>
                        Nenhuma vaga encontrada
                    </Typography>
                ) : (
                    vagas.map((vaga, index) => {
                        return (
                            <>
                                <Card sx={{ minWidth: 275 }} key={index}>
                                    <CardContent>
                                        <Typography variant="h3">{vaga.nomeVaga}</Typography>

                                        <Typography variant="h5" component="div">
                                            Tipo Vaga
                                            <Typography variant="body1">{vaga.tipoVaga}</Typography>
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Descrição da vaga
                                            <Typography variant="body1">{vaga.descricao}</Typography>
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Beneficios
                                            <Typography variant="body1">{vaga.beneficios}</Typography>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained" startIcon={<FaPen/>} onClick={() => navigate(`/panel/${vaga.id}`)}>
                                            EDITAR
                                        </Button>
                                        <Button size="small" variant="contained" startIcon={<FaEye />} onClick={() => navigate(`/microtask/${vaga.id}`)}>
                                            GERENCIAR
                                        </Button>
                                        <Button size="small" variant="contained" startIcon={<FaTrash />} onClick={() => deleteVaga(vaga.id)}>
                                            EXCLUIR
                                        </Button>
                                    </CardActions>
                                </Card>
                            </>
                        );
                    })
                )}
            </GridContentPanel>
        </>
    );
}


export default PanelPage
