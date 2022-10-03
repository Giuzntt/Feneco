import {   Box, Button, Card, CardActions, CardContent, Divider, Grid, Typography  } from "@mui/material";

import {  useNavigate  } from "react-router-dom";
import NoVagas from "../../Assets/images/no-vagas.jpg"
import { useVagas } from "../../Hooks/useVagas";
import { HomeContent } from "./styles";




const HomePage = () => {
  
  let navigate = useNavigate()
  const { vagas, findTaskById } = useVagas();
  
 




   async function getWorkbyId (id:string | undefined) {
       navigate(`/vagas/${id}/work`) 
       await findTaskById(id);
        // const id = useLocation().pathname.split("/")[2];

    }



    return (
      <>
        <Typography
          variant="h4"
          color="gray"
          sx={{ textAlign: "center", mt: 2, mb: 2 }}
        >
          Vagas Disponiveis:
        </Typography>
        <HomeContent container>
          {/* Se não tiver nenhuma vaga, irá receber uma mensagem vagas não encontradas
           */}
          {vagas.length === 0 ? (
            <Box
              className="no-vagas"
            >
              <img src={NoVagas} alt=""  style={{display:'block', marginLeft:'auto', marginRight:'auto'}}/>
            </Box>
          ) : (
            // Se tiver vagas, irá mostrar as vagas
            vagas.map((vaga, index) => {
              return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                                 {vaga.microtarefa===true? 'Sim': 'Não'} 
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
                              <Button size="small" variant="contained" onClick={() => getWorkbyId(vaga.id)} color={'warning'} fullWidth>
                                  Candidatar-se
                              </Button>
                          </CardActions>
                      </Card>
                  </Grid>
              );
            })
          )}
        </HomeContent>
      </>
    );
    }


export default HomePage;