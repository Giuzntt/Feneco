import { Button, CircularProgress, IconButton, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';
import { IVagaProps } from '../../Hooks/useVagas';
import { GridContent } from './styles';
import { useLocation, useMatch, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api_task, api_vagas } from '../../api/api';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface IMyForm {
    id?: string | undefined;
    nomeMicrotarefa?: string;
    descricaoMicrotarefa?: string;
    dataMicrotarefa?: string;
    beneficios?: string;
}


const CreateTask = () => {
    const { id, } = useParams<{ id: string,idTask:string }>();
    const [vaga, setVaga] = useState<IVagaProps>();
    const [isFetching, setFetching] = useState(false);
    let navigate = useNavigate();
    
     


    async function createTask(data: IMyForm) {
        try {

        await api_vagas.post(`/vagas/${id}/work`, data);
        navigate(`/microtask/${id}`);
        toast.success('Microtarefa criada com sucesso!');
        setFetching(true);
        
        setFetching(false);
        } catch (error) {
            toast.error('Erro ao criar microtarefa');
        }
        
    }

  
    

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<IMyForm>({});





    async function onSubmit(data: IMyForm) {
            console.log(id)
            console.log(data);
            createTask(data)
        
            
        
    }

    if (isFetching) {
        return (
            <>
                <CircularProgress
                    color="warning"
                    sx={{
                        position: 'absolute',
                        fontSize: 100,
                        top: '50%',
                        left: '50%',
                        marginTop: -12,
                        marginLeft: -12
                    }}
                />
            </>
        );
    }

    return (
        <>
            <IconButton
                onClick={() => navigate(-1)}
                aria-label="delete"
                size="large"
                style={{
                    color: '#b1a8a8',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    marginLeft: '1rem',
                    marginTop: '1rem'
                }}
            >
                <FaArrowLeft />
            </IconButton>

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
                Criar Microtarefa
            </Typography>
            <GridContent container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="nomeMicrotarefa"
                        control={control}
                        rules={{ required: false }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Nome da Microtarefa"
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: '1rem' }}
                                error={!!errors.nomeMicrotarefa}
                                helperText={errors.nomeMicrotarefa?.message}
                            />
                        )}
                    />
                    <Controller
                        name="descricaoMicrotarefa"
                        control={control}
                        rules={{ required: false }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Descrição"
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: '1rem' }}
                                error={!!errors.descricaoMicrotarefa}
                                helperText={errors.descricaoMicrotarefa?.message}
                            />
                        )}
                    />

                    <Controller
                        name="dataMicrotarefa"
                        control={control}
                        rules={{ required: false }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Data"
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: '1rem' }}
                                error={!!errors.dataMicrotarefa}
                                helperText={errors.dataMicrotarefa?.message}
                            />
                        )}
                    />

                    <Button type="submit" fullWidth color="primary" variant="contained">
                        Criar Microtarefa
                    </Button>
                </form>
            </GridContent>
        </>
    );
};

export default CreateTask;
