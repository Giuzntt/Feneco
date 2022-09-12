import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
// import { BoxLogin, LoginContainer } from "./styles";
import { Grid } from '@mui/material';
import { BoxLogin } from './styles';



export default function LoginPage() {
    return (
      // CENTERED CONTAINER

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
        <BoxLogin>

          <TextField id="outlined-basic" label="Login" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
          <Button variant="outlined" color="primary" fullWidth>
            Entrar
          </Button>
        </BoxLogin>
        </Grid>
      </Grid>
    );
    }