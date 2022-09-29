import {  Grid, Typography } from "@mui/material";

import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useVagas } from "../../Hooks/useVagas";

import { BoxHeader, BoxWork } from "./styles";


export function WorkPage(){
    
    
    const {tasks, findTaskById} = useVagas();
    // pegar id da rota atual
    const { id } = useParams<{ id: string }>();

    // buscar vaga pelo id
    useEffect(()=>{
        loadStatusTask(id)
    }, [id])

    async function loadStatusTask(id: string | undefined) {
        await findTaskById(id);
    }


    return (
        <>
            <BoxHeader>
                <Link
                    to="/vagas"
                    style={{
                        textDecoration: 'none',
                        display: 'flex',
                        fontSize: '1.5rem',
                        color: 'gray',
                        alignItems: 'center'
                    }}
                >
                    <FaArrowLeft />
                </Link>
                <Typography variant="h5" color="gray">
                    Tela de Capacitação
                </Typography>
            </BoxHeader>
            <Grid
                container
                sx={{
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Grid item xs={8}>
                    <BoxWork>
                       
                            {
                                tasks.map((task, index)=>{
                                    return (
                                            <ul>
                                        <>
                                                <li key={index}>
                                                    <Typography variant="h6" color="#FFFF">
                                                        1. Você se candidatou a uma vaga de emprego?
                                                    </Typography>
                                                    <br />
                                                    <p>{task.jobCheck === false ? 'Sim' : 'Nao'}</p>
                                                </li>
                                                <li>
                                                    <Typography variant="h6" color="#FFFF">
                                                        2. Realizou a microtarefa?
                                                    </Typography>
                                                    <br />
                                                    <p>{task.taskCheck === false ? 'Sim' : 'Nao'}</p>
                                                </li>
                                                <li>
                                                    <Typography variant="h6" color="#FFFF">
                                                        3. Aguardando resposta do Gestor?
                                                    </Typography>
                                                    <br />
                                                    <p>{task.feedCheck === true ? 'Sim' : 'Nao'}</p>
                                                </li>
                                        </>
                                            </ul>
                                    );
                                })
                            }
                      
                    </BoxWork>
                </Grid>
            </Grid>
        </>
    );
}