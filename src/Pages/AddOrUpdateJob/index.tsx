import { Button, FormControl, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react';
import { api_vagas } from '../../api/api';
import {  useVagas } from '../../Hooks/useVagas';



interface IFieldsProps {
    id?: string;
    nomeVaga?: string;
    descricao?: string;
    tipoVaga?: string;
    beneficios?: string;
    
}

const AddOrUpdateJob = () => {
   

    const fieldInitialState ={
        nomeVaga: '',
        descricao: '',
        tipoVaga: '',
        beneficios: '',

    } as IFieldsProps;
    const [fields, setFields] = useState<IFieldsProps>(fieldInitialState);


    // pls use react-hook-form in fields
    const { nomeVaga, descricao, tipoVaga, beneficios } = fields;

    

    return (
        <>
            <Typography
                variant="h2"
                color="initial"
                sx={{
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    color: '#000000',
                    fontWeight: '700'
                }}
            >
                Adicionar Vaga
            </Typography>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    minHeight: '100vh',
                    gap: '1rem'
                    // background opacity  0.5
                }}
            >
                <form
                    action=""
                    onSubmit={() => {}}
                    style={{
                        display: 'grid',
                        gap: '1rem',
                        width: '100%',
                        maxWidth: '1440px',
                        padding: '0 1rem',
                        margin: '0 auto'
                    }}
                >
                    <TextField id="" label="Nome da Vaga" value={nomeVaga} onChange={(e) => setFields({ ...fields, nomeVaga: e.target.value })} variant="outlined" />

                    <TextField id="" label="Descrição da Vaga" value={descricao} variant="outlined" onChange={(e) => setFields({ ...fields, descricao: e.target.value })} />

                    <TextField id="" label="Tipo Vaga" value={tipoVaga} variant="outlined" onChange={(e) => setFields({ ...fields, tipoVaga: e.target.value })} />

                    <TextField id="" label="Descrição da Vaga" value={beneficios} variant="outlined" onChange={(e) => setFields({ ...fields, beneficios: e.target.value })} />

                    <Button variant="contained" color="success" size="large" type="submit" fullWidth>
                        Criar vaga
                    </Button>
                </form>
            </Grid>
        </>
    );
};



export default AddOrUpdateJob