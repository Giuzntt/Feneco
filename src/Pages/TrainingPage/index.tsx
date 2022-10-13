import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import {  GridContainer } from "./styles";
import html5 from '../../Assets/images/html.jpg';
import css3 from "../../Assets/images/css.jpg";
import cursoJs from "../../Assets/images/javascript.jpg";
import backlogo from '../../Assets/images/banner-EY.png';


export function TrainingPage(){
    return (
        <>
            <GridContainer container>
                <Card className="card-banner">
                    <CardMedia component="img" src={backlogo} alt="banner" />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Você pode tirar suas dúvidas sobre os cursos de programação, em nosso canal do youtube.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Para tirar suas dúvidas sobre os cursos de programação, em nosso canal do youtube.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href="https://discord.gg/h2T2bceB">
                            CONHECER
                        </Button>
                    </CardActions>
                </Card>
                {/* create card containing tranings */}
                <Box>
                    <Card>
                        <CardMedia component="img" alt="green iguana" height="140" image={html5} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Curso de HTML5
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Iniciando os fundamentos em HTML5, aprenda a criar páginas web com HTML5
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="contained" color="warning" href="https://www.alura.com.br/cursos-online-front-end/html-css" fullWidth>
                                Quero conhecer o curso
                            </Button>
                        </CardActions>
                    </Card>
                    <Card>
                        <CardMedia component="img" alt="green iguana" height="140" image={css3} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Curso de CSS3
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Iniciando os fundamentos em CSS3, aprenda a estilizar suas páginas web.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="contained" color="warning" href="https://www.alura.com.br/cursos-online-front-end/html-css" fullWidth>
                                Quero conhecer o curso
                            </Button>
                        </CardActions>
                    </Card>
                    <Card>
                        <CardMedia component="img" alt="green iguana" height="140" image={cursoJs} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Curso JavaScript
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Iniciando os fundamentos em JavaScript, aprenda a criar páginas web dinâmicas.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={'/course'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
                            >

                            <Button
                                size="large"
                                variant="contained"
                                fullWidth
                                >
                                Quero conhecer o curso
                            </Button>
                                </Link>
                        </CardActions>
                    </Card>
                </Box>
            </GridContainer>
        </>
    );
}