import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { GridCourse } from './styles';
import css3 from '../../Assets/images/battle.png';

export function CoursePage() {
    return (
        <GridCourse container>
            {/* insert video free condecamp in display flex */}
            <Typography variant="h2" color="initial">
                Curso Introdutório de JavaScript
                <Typography variant="subtitle1" color="initial">
                    Conhecendo a linguagem e as principais ferramentas, como o Node.js e o React.
                </Typography>
            </Typography>

            <Box className="box-title">
                <Typography variant="body1" color="initial">
                    A linguagem JavaScript é uma das mais utilizadas no mundo, e é a base para o desenvolvimento de aplicações web, mobile e desktop. Neste curso, você vai aprender os conceitos
                    básicos da linguagem, e como utilizá-la para criar aplicações web com HTML e CSS.
                </Typography>

                <iframe
                    width="1260"
                    height="315"
                    src="https://www.youtube.com/embed/jS4aFq5-91M"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Box>
            <Typography variant="h6" color="initial">
                Você também, pode conhecer alguns sites para praticar e aprender mais sobre JavaScript
            </Typography>
            <Box className="box-content">
                <Card>
                    <CardMedia component="img" alt="green iguana" height="140" image={css3} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Codewars
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Codewars é uma plataforma de treinamento para desenvolvedores, onde você pode praticar e aprender novas habilidades de programação.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" variant="contained" color="warning" href="https://www.codewars.com/" fullWidth>
                            Quero conhecer esse site
                        </Button>
                    </CardActions>
                </Card>
                <Card>
                    <CardMedia component="img" alt="green iguana" height="140" image={css3} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            HackerRank
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            HackerRank é uma plataforma de treinamento para desenvolvedores, onde você pode praticar programação.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" variant="contained" color="warning" href="https://www.hackerrank.com/" fullWidth>
                            Quero conhecer esse site
                        </Button>
                    </CardActions>
                </Card>
                <Card>
                    <CardMedia component="img" alt="green iguana" height="140" image={css3} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Code Forces
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Permite montar competições de programação, onde os participantes podem resolver problemas de programação e submeter suas soluções.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" variant="contained" color="warning" href="https://codeforces.com/" fullWidth>
                            Quero conhecer esse site
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </GridCourse>
    );
}
