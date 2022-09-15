import { Box, Fab, Grid, Typography } from '@mui/material';
import { BoxLogin } from './styles';
import Logo from '../../Assets/logo-login.svg';
import { CustomTextField } from '../../components/TextField';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { CustomButton } from '../../components/Button';



export default function LoginPage() {
  return (
    // CENTERED CONTAINER

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FCC400 10%, #FCC400 60%);",
        // background opacity  0.5
      }}
    >
      <Grid item xs={5}>
        <BoxLogin>
          <img src={Logo} alt="logo" />

          <CustomTextField 
            placeholder="Digite seu email" type="email" disable={true} />
          <CustomTextField placeholder="Digite a sua senha" type="password" disable={true} />

          <CustomButton
            variant="contained"
          >
            Entrar
          </CustomButton>

          <Typography
            variant="h2"
            color="initial"
            sx={{ textAlign: "center", color: "#FFFF", fontSize: "1.5rem",
            fontWeight: "700" }}


          >
            Or
          </Typography>

          <Box
            sx={{
              display: "Flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Fab color="info" aria-label="add">
              <FaLinkedin className="icon" />
            </Fab>
            <Fab color="default" aria-label="add">
              <FaGithub className="icon" />
            </Fab>
            <Fab color="default" aria-label="add">
              <FaGoogle className="icon" />
            </Fab>
          </Box>
        </BoxLogin>
      </Grid>
    </Grid>
  );
    }