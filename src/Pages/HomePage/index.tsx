import {   Button, Card, CardActions, CardContent, Divider, Grid, Typography  } from "@mui/material";

import { useVagas } from "../../Hooks/useVagas";
import { HomeContent } from "./styles";


const HomePage = () => {

    const { vagas } = useVagas();


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
          {
            vagas.map((vaga)=>{
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ minWidth: 275 }} key={vaga.id}>
                    <CardContent>
                      <Typography
                        variant={"h5"}
                        sx={{ fontSize: 14, textAlign: "center" }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Nome vagas
                      </Typography>
                      <Typography variant="h6" component="div">
                        {vaga.nomeVaga}
                      </Typography>
                      <Divider />
                      <Typography
                        variant={"h5"}
                        sx={{ fontSize: 14, textAlign: "center", mt: 2 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Tipo Vaga
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        textAlign={"center"}
                      >
                        {vaga.tipoVaga}
                      </Typography>
                      <Divider />
                      <Typography
                        variant={"h5"}
                        sx={{ fontSize: 14, textAlign: "center", mt: 2 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Descricao
                      </Typography>

                      <Typography variant="body2" sx={{ textAlign: "center" }}>
                        {vaga.descricao}
                      </Typography>
                      <Divider />
                      <Typography
                        variant={"h5"}
                        sx={{ fontSize: 14, textAlign: "center", mt: 2 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Microtarefa
                      </Typography>

                      <Typography variant="body2" sx={{ textAlign: "center" }}>
                        Não Disponível
                      </Typography>
                      <Divider />
                      <Typography
                        variant={"h5"}
                        sx={{ fontSize: 14, textAlign: "center", mt: 2 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Beneficios
                      </Typography>
                      <Typography
                        variant={"h5"}
                        sx={{ fontSize: 14, textAlign: "center", mt: 2 }}
                        gutterBottom
                      >
                        {vaga.beneficios}
                      </Typography>
                      <Divider />
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        variant="contained"
                        color={"warning"}
                        fullWidth
                      >
                        Candidatar-se
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            }

            )
          }
          
        </HomeContent>
      </>
    );
    }


export default HomePage;