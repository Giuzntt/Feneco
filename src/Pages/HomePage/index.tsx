import {  Grid, Stack, Typography } from "@mui/material";
import BasicCard from "../../components/Card";


const HomePage = () => {
    return (
      <Grid
        container
        spacing={0}
        direction="row"
        // alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={8} style={{ textAlign: "start", marginTop: "2rem" }}>
          <Typography
            variant="h1"
            color="initial"
            sx={{
              textAlign: "start",
              color: "gray",
              fontSize: "2rem",
              fontFamily: "Open Sans",
              fontWeight: "700",
            }}
          >
            Vagas no seu perfil:
          </Typography>

          <Stack direction="column" spacing={2} style={{ minWidth: "100%", marginTop:'1rem', }}>
            <BasicCard />
            <BasicCard />
            <BasicCard />
          </Stack>
        </Grid>
      </Grid>
    );
    }


export default HomePage;