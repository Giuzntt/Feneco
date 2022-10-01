import {  Grid, Typography } from '@mui/material';
import { BoxLogin } from './styles';
import Logo from '../../Assets/logo-login.svg';
import { CustomTextField } from '../../components/TextField';

import { CustomButton } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';



export default function LoginPage() {

  const [valueLogin, setValueLogin] = useState('');
  const [valuePassword, setValuePassword] = useState('');



   function fakeLogin() {
    if (valueLogin === 'admin' && valuePassword === 'admin') {
      //  use Link to panel page react-router-dom

      window.location.href = '/panel';
    } else {
      toast.error('Usuário ou senha incorretos');
    }
  }

  return (
      // CENTERED CONTAINER


      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
              minHeight: '100vh',
              background: 'linear-gradient(180deg, #FCC400 10%, #FCC400 60%);'
              // background opacity  0.5
          }}
      >
          <Grid item xs={5}>
              <BoxLogin>
                  <img src={Logo} alt="logo" />

                  <CustomTextField placeholder="Digite seu email" type="email" value={valueLogin} onChange={(e) => setValueLogin(e.target.value)} />
                  <CustomTextField placeholder="Digite a sua senha" type="password" value={valuePassword} onChange={(e) => setValuePassword(e.target.value)} />

                  <Typography
                      variant="h5"
                      color="inherit"
                      sx={{
                          marginTop: '1rem',
                          marginBottom: '1rem',
                          textAlign: 'end',
                          fontSize: '1rem',
                          color: '#FFFFFF',
                          fontWeight: 'bold'
                      }}
                  >
                      Não tem uma conta?{' '}
                      <Link to="/Register" style={{ textDecoration: 'none', color: '#FFFFF' }}>
                          Cadastre-se
                      </Link>
                  </Typography>
                  <CustomButton variant="contained"
                  to={ valueLogin === 'admin' && valuePassword === 'admin' ? '/panel' : '/login'}
                  onClick={fakeLogin}
                  >
                      Entrar
                  </CustomButton>
              </BoxLogin>
          </Grid>
      </Grid>
  );
    }