import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField'
import { useForm, Controller } from 'react-hook-form';
import { useVagas } from '../../Hooks/useVagas';
import {  toast } from 'react-toastify';
import { GridContent } from './styles';

interface IMyForm {
    nomeVaga?: string;
    descricao?: string;
    tipoVaga?: string;
    beneficios?: string;
}




const CreateOrUpdateJob = () => {
    const { createTask } = useVagas()
   
    const {
        register,
        handleSubmit,
        formState: { errors },
    
    } = useForm<IMyForm>();

    async function onSubmit (data: IMyForm) {
        toast.success('Vaga criada com sucesso!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    
        await createTask(data)
       



    };

   
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
            <GridContent
                container
            >
                
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <TextField
                        variant="outlined"
                        margin="none"
                        label="Nome da Vaga"
                        error={!!errors.nomeVaga}
                        helperText={errors?.nomeVaga?.message}
                        {...register("nomeVaga", {
                            required: "error text"
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="none"
                        label="Descrição"
                        error={!!errors.descricao}
                        helperText={errors?.descricao?.message}
                        {...register("descricao", {
                            required: "error text"
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="none"
                        label="Tipo de Vaga"
                        error={!!errors.tipoVaga}
                        helperText={errors?.tipoVaga?.message}
                        {...register("tipoVaga", {
                            required: "error text"
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="none"
                        label="Beneficios"
                        error={!!errors.beneficios}
                        helperText={errors?.beneficios?.message}
                        {...register("beneficios", {
                            required: "error text"
                        })}
                    />

                    <Button type="submit"  
                        fullWidth
                        color="primary"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </form>
                  
            </GridContent>
        </>
    );
};



export default CreateOrUpdateJob