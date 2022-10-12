import {   Box, Button, Card, CardActions, CardContent, Divider, Grid, Tooltip, Typography  } from "@mui/material";
import { useEffect } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import {  useNavigate  } from "react-router-dom";
import { toast } from "react-toastify";
import { api_vagas } from "../../api/api";
import NoVagas from "../../Assets/images/no-vagas.jpg"
import { useVagas } from "../../Hooks/useVagas";
import { HomeContent } from "./styles";





const HomePage = () => {
  
  let navigate = useNavigate()
  const { vagas } = useVagas();
  
 
  useEffect(()=>{
 

  },[vagas])



   async function getWorkbyId (id:string | undefined) {
      let data = {
        candidatura: true
      }  

      await api_vagas.put(`/vagas/${id}`, data).then(
        (response) => {
          if (response.status === 200) {
            toast.success("Candidatura realizada com sucesso!");
            navigate(`/vagas/${id}`);
          }

        }).catch((error) => {
          toast.error("Erro ao realizar candidatura!");
        });
    }



    return (
        <>
            <Typography variant="h4" color="#FDC201" sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
                Confira as vagas disponíveis:
            </Typography>
            <HomeContent container>
                {/* Se não tiver nenhuma vaga, irá receber uma mensagem vagas não encontradas
                 */}
                {vagas.length === 0 ? (
                    <Box className="no-vagas">
                        <img src={NoVagas} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                    </Box>
                ) : (
                    // Se tiver vagas, irá mostrar as vagas
                    vagas.map((vaga, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                {vaga.candidatura ? (
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                                Nome da vaga
                                            </Typography>
                                            <Typography variant="h6" component="div" textAlign={'center'}>
                                                {vaga.nomeVaga}
                                            </Typography>
                                            <Divider />
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} color="text.secondary" gutterBottom>
                                                Tipo de Vaga
                                            </Typography>
                                            <Typography variant="h6" component="div" textAlign={'center'}>
                                                {vaga.tipoVaga}
                                            </Typography>
                                            <Divider />
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} color="text.secondary" gutterBottom>
                                                Descrição
                                            </Typography>

                                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                                {vaga.descricao}
                                            </Typography>
                                            <Divider />
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} color="text.secondary" gutterBottom>
                                                Microtarefa
                                            </Typography>

                                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                                {vaga.microtarefa === true ? <FaCheck color="green" /> : <FaTimes color="red" />}
                                            </Typography>
                                            <Divider />
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} color="text.secondary" gutterBottom>
                                                Beneficios
                                            </Typography>
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} gutterBottom>
                                                {vaga.beneficios}
                                            </Typography>
                                            <Divider />
                                        </CardContent>
                                        <CardActions
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                gap: 2
                                            }}
                                        >
                                            {vaga.candidatura === true ? (
                                                <Tooltip title="Você já se candidatou para essa vaga!">
                                                    <Button
                                                        size="small"
                                                        variant="outlined"
                                                        onClick={() => navigate(`/vagas/${vaga.id}`)}
                                                        sx={{
                                                            backgroundColor: '#fff',
                                                            color: '#FDC201',
                                                            border: '1px solid #FDC201',
                                                            '&:hover': {
                                                                backgroundColor: '#fff',
                                                                color: '#FDC201',
                                                                border: '1px solid #FDC201'
                                                            }
                                                        }}
                                                        fullWidth
                                                    >
                                                        Ver candidatura
                                                    </Button>
                                                </Tooltip>
                                            ) : (
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    onClick={() => getWorkbyId(vaga.id)}
                                                    sx={{
                                                        backgroundColor: '#FDC201',
                                                        color: '#fff',
                                                        '&:hover': {
                                                            backgroundColor: '#FDC201',
                                                            color: '#fff'
                                                        }
                                                    }}
                                                    disabled={vaga.candidatura}
                                                    fullWidth
                                                >
                                                    Candidatar-se
                                                </Button>
                                            )}
                                        </CardActions>
                                    </Card>
                                ) : (
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                                Nome vagas
                                            </Typography>
                                            <Typography variant="h6" component="div" textAlign={'center'}>
                                                {vaga.nomeVaga}
                                            </Typography>
                                            <Divider />
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} color="text.secondary" gutterBottom>
                                                Tipo Vaga
                                            </Typography>
                                            <Typography variant="h6" component="div" textAlign={'center'}>
                                                {vaga.tipoVaga}
                                            </Typography>
                                            <Divider />
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} color="text.secondary" gutterBottom>
                                                Descricao
                                            </Typography>

                                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                                {vaga.descricao}
                                            </Typography>
                                            <Divider />
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} color="text.secondary" gutterBottom>
                                                Microtarefa
                                            </Typography>

                                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                                {vaga.microtarefa === true ? <FaCheck color="green" /> : <FaTimes color="red" />}
                                            </Typography>
                                            <Divider />
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} color="text.secondary" gutterBottom>
                                                Beneficios
                                            </Typography>
                                            <Typography variant={'h5'} sx={{ fontSize: 14, textAlign: 'center', mt: 2 }} gutterBottom>
                                                {vaga.beneficios}
                                            </Typography>
                                            <Divider />
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() => getWorkbyId(vaga.id)}
                                                sx={{
                                                    width: '100%',
                                                    backgroundColor: '#FDC201',
                                                    color: '#fff',
                                                    '&:hover': {
                                                        backgroundColor: '#FDC201',
                                                        color: '#fff'
                                                    }
                                                }}
                                                fullWidth
                                            >
                                                Candidatar-se
                                            </Button>
                                        </CardActions>
                                    </Card>
                                )}
                            </Grid>
                        );
                    })
                )}
            </HomeContent>
        </>
    );
    }


export default HomePage;