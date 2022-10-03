import { Card, CardContent, Typography, Button, CardActions, IconButton, CircularProgress } from "@mui/material";
import { useState, useLayoutEffect, useEffect } from 'react';
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api_task, api_vagas } from "../../api/api";
import { IVagaProps } from "../../Hooks/useVagas";
import { BoxTask, GridContainer } from "./styles"


interface ITaskProps {
    id?: string | undefined;
    nomeMicrotarefa?: string;
    descricao?: string;
    dataMicrotarefa?: string;
}



const MicroTaskPage = () => {
    
    const [vaga, setVaga] = useState<IVagaProps>({})
    const [tasks, setTasks] = useState<ITaskProps[]>([])
    const [isFetching, setFetching] = useState(false);

    
    
    const {id} = useParams<{id: string}>()
    //  set id in localStorage
    
    let navigate = useNavigate();
    

    

    useEffect(() => {
            getVaga();
            getMicroTask();
    },[])

 
         async function getVaga() {
             try {
                 setFetching(true);
                 const { data } = await api_vagas.get(`/vagas/${id}`);
                
                 setVaga(data);
             } finally {
                 setFetching(false);
             }
         }

         async function getMicroTask() {
                try {
                    setFetching(true);
                    const { data } = await api_task.get(`/vagas/${id}/work/`);
                   


                    
                    setTasks(data);
                }
                catch (error) {
                    console.log(error);
                }
                finally{
                    setFetching(false);
                }    
            }


            async function handleDelete(idTask: string | undefined) {
                try {
                    setFetching(true);
                    await api_task.delete(`/vagas/${id}/work/${idTask}`).then((response) => {
                        if(response.status === 200) {
                            toast.success("Microtarefa deletada com sucesso!")
                        }
                    }).catch((error) => {
                        toast.error("Erro ao deletar microtarefa!")
                    })


                    getMicroTask();
                }
                catch (error) {
                    console.log(error);
                }
                finally{
                    setFetching(false);
                }
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
            {isFetching}
            <GridContainer container>
                <Link
                    to="/panel/"
                    style={{
                        textDecoration: 'none',
                        color: '#fff',
                        display: 'flex',
                        marginRight: 'auto',
                        gap: '8px'
                    }}
                >
                    <IconButton
                        aria-label="delete"
                        size="large"
                        style={{
                            color: '#b1a8a8',
                            borderRadius: '50%',
                            padding: '8px',
                            marginLeft: '16px',
                            marginTop: '16px'
                        }}
                    >
                        <FaArrowLeft />
                    </IconButton>
                </Link>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Nome da Vaga
                            <Typography variant="body1" component="p">
                                {vaga.nomeVaga}
                            </Typography>
                        </Typography>

                        <Typography variant="h5" component="div">
                            Descrição
                            <Typography variant="body1" component="p">
                                {vaga.descricao}
                            </Typography>
                        </Typography>
                    </CardContent>
                </Card>
                <BoxTask>
                    <Typography variant="h5" color="initial">
                        Lista de Microtarefas
                    </Typography>

                  
                        <Button variant="contained" color="primary" startIcon={<FaPlus />} onClick={() => navigate(`/microtask/${vaga.id}/task`)}>
                            Adicionar Tarefa
                        </Button>
                </BoxTask>
                {
                    tasks.map((task)=>{
                        return (
                            <Card key={task.id} sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Nome da Microtarefa
                                        <Typography variant="body1">{task.nomeMicrotarefa}</Typography>
                                    </Typography>

                                    <Typography variant="h5" component="div">
                                        Descrição da Microtarefa
                                        <Typography variant="body1">{task.descricao}</Typography>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={() => {
                                            navigate(`/microtask/${vaga.id}/updatetask/${task.id}`);
                                        }}
                                    >
                                        EDITAR
                                    </Button>

                                    <Button size="small" variant="contained" onClick={() => handleDelete(task.id)}>
                                        EXCLUIR
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    }


                    )   
                }
            </GridContainer>
        </>
    );

}

export default MicroTaskPage