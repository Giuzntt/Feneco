import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form';
import { useVagas } from '../../Hooks/useVagas';
import {  toast } from 'react-toastify';
import { GridContent } from './styles';
import { useNavigate } from 'react-router-dom';

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

        navigate('/panel')
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

    const navigate = useNavigate();

   
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
                            required: "Favor preencher o campo nome da vaga",
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="none"
                        label="Descrição"
                        error={!!errors.descricao}
                        helperText={errors?.descricao?.message}
                        {...register("descricao", {
                            required: "Favor preencher a descrição"
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="none"
                        label="Tipo de Vaga"
                        error={!!errors.tipoVaga}
                        helperText={errors?.tipoVaga?.message}
                        {...register("tipoVaga", {
                            required: "Favor preencher o tipo de vaga"
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="none"
                        label="Beneficios"
                        error={!!errors.beneficios}
                        helperText={errors?.beneficios?.message}
                        {...register("beneficios", {
                            required: "Faça uma breve descrição dos beneficios"
                        })}
                    />

                    <Button type="submit"  
                        fullWidth
                        color="primary"
                        variant="contained"
                    
                    >
                        CRIAR VAGA
                    </Button>
                </form>
                  
            </GridContent>
        </>
    );
};



export default CreateOrUpdateJob