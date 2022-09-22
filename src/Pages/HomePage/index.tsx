import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import BasicCard from "../../components/Card";


const HomePage = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            // alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >   
            <Grid item xs={12} style={{textAlign: 'center', marginTop: '2rem'}}>
                <Typography variant="h1" color="initial" sx={{
                    textAlign: "start",
                    marginLeft: "10rem",
                    color: "gray",
                    fontSize: "2rem",
                    fontFamily:"Open Sans",
                    fontWeight: "700",
                }}>
                    Vagas no seu perfil:
                </Typography>
                   
        
            </Grid>
            <Stack direction="row" spacing={2} style={{minWidth:'60%'}}>
            <Box>

                <BasicCard />
            </Box>
            </Stack>


            
        </Grid>
    );
    }


export default HomePage;