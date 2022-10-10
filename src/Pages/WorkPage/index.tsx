import { CardWork, WorkPageContainer } from "./styles";
import Typography from '@mui/material/Typography'
import { Alert, Box, Card, CardContent, IconButton } from "@mui/material";
import {  FaArrowLeft, FaCheck, FaEllipsisH, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";





export function WorkPage(){
   return (
       <WorkPageContainer>
           <Link
               to="/vagas/"
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
           <Typography variant="h3" align="center">
               Conheça sua trajetória nesse processo
           </Typography>
           <Alert variant="filled" severity="info">
               Agora é com a empresa, aguarde a microtarefa estar dispónível, enquanto isso você pode connhecer alguns
               <Link to="/training" style={{ color: '#ffffff', fontWeight: 'bold' }}>
                   {' '}
                   cursos
               </Link>{' '}
               para se preparar para a microtarefa.
           </Alert>

           <Box component={'div'}>
               <CardWork isCheck={true}>
                   <CardContent>
                       <FaCheck className="icon" />
                       <Typography variant="h5">Inscrito</Typography>
                   </CardContent>
               </CardWork>
               <FaEllipsisH className="arrow" />
               <CardWork isCheck={false}>
                   <CardContent>
                       <FaTimes className="icon" />
                       <Typography variant="h5">Microtarefa</Typography>
                   </CardContent>
               </CardWork>
               <FaEllipsisH className="arrow-2" />
               <CardWork isCheck={false}>
                   <CardContent>
                       <FaTimes className="icon" />
                       <Typography variant="h5">Entrevista</Typography>
                   </CardContent>
               </CardWork>
           </Box>
       </WorkPageContainer>
   );
}