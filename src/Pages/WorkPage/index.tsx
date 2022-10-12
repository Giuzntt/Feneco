import { CardWork, WorkPageContainer } from "./styles";
import Typography from '@mui/material/Typography'
import { Alert, Box, Card, CardContent, IconButton, Tooltip } from "@mui/material";
import {  FaArrowLeft, FaCheck, FaEllipsisH, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api_vagas } from "../../api/api";
import { useEffect, useState } from "react";
import { IVagaProps } from "../../Hooks/useVagas";





export function WorkPage(){
    let navigate = useNavigate();
    const {id} = useParams();

    const [vaga, setVaga] = useState <IVagaProps>({});
    async function getById(){
     let response=   await api_vagas.get(`vagas/${id}`)
        setVaga(response.data)
    }

    useEffect(()=>{
        getById()
    },[])

   return (
       <WorkPageContainer>
           <Box
               sx={{
                   marginRight: 'auto'
               }}
           >
               <IconButton aria-label="delete" onClick={() => navigate(-1)}>
                   <FaArrowLeft />
               </IconButton>
           </Box>

           <Typography variant="h3" align="center">
               Conheça sua trajetória nesse processo
           </Typography>

           {vaga.candidatura === true && vaga.microtarefa === false ? (
               <Alert variant="filled" severity="info">
                   Agora é com a empresa, aguarde a microtarefa estar dispónível, enquanto isso você pode connhecer alguns
                   <Link to="/training" style={{ color: '#ffffff', fontWeight: 'bold' }}>
                       {' '}
                       cursos
                   </Link>{' '}
                   para se preparar para a microtarefa.
               </Alert>
           ) : vaga.candidatura === true && vaga.microtarefa === true ? (
               <Alert variant="filled" severity="success">
                   Você já concluiu a microtarefa e está apto a participar da entrevista
               </Alert>
           ) : (
               <Alert variant="filled" severity="warning">
                   Você ainda não concluiu a microtarefa, por favor, realize-a para participar da entrevista
               </Alert>
           )}

           <Box component={'div'}>
               <CardWork ischeck>
                   <CardContent>
                       {vaga.candidatura ? (
                           <>
                               <FaCheck className="icon2" />
                               <Typography variant="h6">Inscrito</Typography>
                           </>
                       ) : (
                           <>
                               <FaTimes className="icon" />
                               <Typography variant="h5">Inscrito</Typography>
                           </>
                       )}
                   </CardContent>
               </CardWork>
               {vaga.candidatura ? <FaEllipsisH className="arrow" /> : <FaEllipsisH className="arrow-2" />}
               <CardWork>
                   <CardContent>
                       {vaga.microtarefa ? (
                           <>
                               <FaCheck className="icon2" />
                               <Tooltip title="Vá para página de microtarefas">
                                   <Typography variant="h6">Microtarefa</Typography>
                               </Tooltip>
                           </>
                       ) : (
                           <>
                               <FaTimes className="icon" />
                               <Typography variant="h5">Microtarefa</Typography>
                           </>
                       )}
                   </CardContent>
               </CardWork>

               {vaga.microtarefa ? <FaEllipsisH className="arrow" /> : <FaEllipsisH className="arrow-2" />}

               <CardWork>
                   <CardContent>
                       {vaga.entrevista ? (
                           <>
                               <FaCheck className="icon2" />
                               <Typography variant="h6">Entrevista</Typography>
                           </>
                       ) : (
                           <>
                               <FaTimes className="icon" />
                               <Typography variant="h5">Entrevista</Typography>
                           </>
                       )}
                   </CardContent>
               </CardWork>
           </Box>
       </WorkPageContainer>
   );
}