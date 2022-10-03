import { Button, CircularProgress, IconButton, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';
import { IVagaProps } from '../../Hooks/useVagas';
import { GridContent } from './styles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api_task, api_vagas } from '../../api/api';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface IMyForm {
    id?: string | undefined;
    nomeMicrotarefa?: string;
    descricao?: string;
    descricaoMicrotarefa?: string;
    dataMicrotarefa?: string;
}

const UpdateTask = () => {
    const { id } = useParams<{ id: string}>();
    const [task, setTask] = useState<IMyForm>();
    const [isFetching, setFetching] = useState(false);
    let navigate = useNavigate();
    
    useEffect(() => {
        getTask();
    }, []);

    let location = useLocation();
   
    async function updateTask(data: IMyForm) {
         try {
            let getId = location.pathname.slice(-2);
             navigate(`/microtask/${id}`);
             await api_vagas.put(`/vagas/${id}/work/${getId}`, data);
             toast.success('Microtarefa editada com sucesso!');
             setFetching(true);

             setFetching(false);
         } catch (error) {
             toast.error('Erro ao editar microtarefa');
         }
    }

    
     async function getTask() {
      
        try {

            // pegar os dois ultimos caracteres da url
            
            let getId = location.pathname.slice(-2);
            console.log(getId);
            setFetching(true);
            const { data } = await api_task.get(`/vagas/${id}/work/${getId}`);
            console.log(data, 'vaga');
            setTask(data);
        } finally {
            setFetching(false);
        }
    }

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<IMyForm>({});





    async function onSubmit(data: IMyForm) {
       
            await updateTask(data);
       
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
                Editar Microtarefa
            </Typography>
            <GridContent container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="nomeMicrotarefa"
                        control={control}
                        rules={{ required: false }}
                        defaultValue={task?.nomeMicrotarefa}
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
                        defaultValue={task?.descricaoMicrotarefa}
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

                    <Button type="submit" fullWidth color="primary" variant="contained">
                        Atualizar Microtarefa
                    </Button>
                </form>
            </GridContent>
        </>
    );
};

export default UpdateTask;
