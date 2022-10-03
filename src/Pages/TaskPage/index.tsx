import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react';
import { api_task } from '../../api/api';
import { BoxTask } from './styles';


interface TaskProps {
    id?: string | undefined;
    nomeMicrotarefa: string;
    descricaoMicrotarefa?: string;
    dataMicrotarefa?: string;
    beneficios?: string;
}

const TaskPage = () => {


    const [tasks, setTasks] = useState<TaskProps>({} as TaskProps);

    useEffect(() => {
      getWorkbyId()
    }, [])

    async function getWorkbyId () {
        await api_task.get(`vagas/1/work/7`).then(response => {
            setTasks(response.data)
         
      
        })
    }




    return (
        <>
            <Typography variant="h4" color="gray" sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
                Microtarefas Disponiveis:
            </Typography>
            <Grid
                container
                spacing={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70vh',
                    width: '100vw'
                }}
            >
                <Grid item xs={12}>
                    <BoxTask>
                        {tasks === null ? (
                            <Typography variant="h1" color="initial">
                                Nenhuma tarefa disponivel
                            </Typography>
                        ) : (
                            <>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Nome da Microtarefa: {tasks.nomeMicrotarefa}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Descrição Microtarefa
                                        </Typography>
                                        <Typography variant="body2">{tasks.descricaoMicrotarefa}</Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'end',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Button size="small" variant="outlined"
                                        color="warning"
                                        >
                                            ENTREGAR
                                        </Button>
                                    </CardActions>
                                </Card>
                            </>
                        )}
                    </BoxTask>
                </Grid>
            </Grid>
        </>
    );
}


export default TaskPage