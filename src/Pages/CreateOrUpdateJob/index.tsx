import { Button, CircularProgress, Typography } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Controller, useForm } from 'react-hook-form';
import { IVagaProps, useVagas } from '../../Hooks/useVagas';
import { GridContent } from './styles';
import {  useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api_vagas } from '../../api/api';


interface IMyForm {
    nomeVaga?: string;
    descricao?: string;
    tipoVaga?: string;
    beneficios?: string;
}

const CreateOrUpdateJob = () => {
    const { createTask, updateJob } = useVagas();

    const {id} = useParams<{id: string}>()

    const [vaga, setVaga] = useState<IVagaProps>()
    const [isFetching, setFetching] = useState(false);
    let navigate = useNavigate();
    

    

    

    useEffect(() => {
        getVaga();
    }, []);

    async function createTaskVaga(data: IMyForm) {
        setFetching(true);
        await createTask(data)
        setFetching(false);
        navigate('/panel');
    }

    async function updateVaga(data: IMyForm) {

        await updateJob(data, id);
        navigate('/panel');
    }

     async function getVaga() {
        try{
            setFetching(true);
            const {data} = await api_vagas.get(`/vagas/${id}`) ;
            console.log(data, 'vaga');
            setVaga(data)
        } finally {
            setFetching(false);
        }
     }


    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<IMyForm>({});


    //  use vaga in useRef
    
    //  use vaga in useEffect
    


    async function onSubmit (data: IMyForm) {


        if(id) {
             await updateVaga(data)
        }    else {
            await createTaskVaga(data);
        }


    };

 

    if(isFetching){
        return <><CircularProgress
        color="warning"
        sx={{
            position: 'absolute',
            fontSize: 100,
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        }}
        /></>
    }

   
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
                {id ? 'Editar Vaga' : 'Criar Vaga'}
            </Typography>
            <GridContent container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="nomeVaga"
                        control={control}
                        rules={{ required: false }}
                        defaultValue={vaga?.nomeVaga}
                        render={({ field }) => (
                            <TextField {...field} label="Nome da Vaga" variant="outlined" fullWidth sx={{ marginBottom: '1rem' }} error={!!errors.nomeVaga} helperText={errors.nomeVaga?.message} />
                        )}
                    />
                    <Controller
                        name="descricao"
                        control={control}
                        rules={{ required: false }}
                        defaultValue={vaga?.descricao}
                        render={({ field }) => (
                            <TextField {...field} label="Descrição" variant="outlined" fullWidth sx={{ marginBottom: '1rem' }} error={!!errors.descricao} helperText={errors.descricao?.message} />
                        )}
                    />
                    <Controller
                        name="tipoVaga"
                        control={control}
                        rules={{ required: false }}
                        defaultValue={vaga?.tipoVaga}
                        render={({ field }) => (
                            <TextField {...field} label="Tipo da Vaga" variant="outlined" fullWidth sx={{ marginBottom: '1rem' }} error={!!errors.tipoVaga} helperText={errors.tipoVaga?.message} />
                        )}
                    />
                    <Controller
                        name="beneficios"
                        control={control}
                        rules={{ required: false }}
                        defaultValue={vaga?.beneficios}
                        render={({ field }) => (
                            <TextField {...field} label="Baneficios" variant="outlined" fullWidth sx={{ marginBottom: '1rem' }} error={!!errors.beneficios} helperText={errors.beneficios?.message} />
                        )}
                    />

                    <Button type="submit" fullWidth color="primary" variant="contained">
                        {id ? 'Atualizar Vaga' : 'Criar Vaga'}
                    </Button>
                </form>
            </GridContent>
        </>
    );
};



export default CreateOrUpdateJob