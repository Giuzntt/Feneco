import {  Grid, Typography } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

import { BoxHeader, BoxWork } from "./styles";

// const { vagas } = useVagas();

export function WorkPage(){
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
                        <ul>
                            <li>
                                <Typography variant="h6" color="#FFFF">
                                    1. Clique no botão "Iniciar" para iniciar a capacitação
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" color="#FFFF">
                                    2. Clique no botão "Iniciar" para iniciar a capacitação
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" color="#FFFF">
                                    3. Clique no botão "Iniciar" para iniciar a capacitação
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" color="#FFFF">
                                    4. Clique no botão "Iniciar" para iniciar a capacitação
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" color="#FFFF">
                                    5. Clique no botão "Iniciar" para iniciar a capacitação
                                </Typography>
                            </li>
                        </ul>
                    </BoxWork>
                </Grid>
                <Outlet />
            </Grid>
        </>
    );
}