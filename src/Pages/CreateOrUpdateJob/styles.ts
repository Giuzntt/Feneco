import styled from "@emotion/styled";
import { Grid } from "@mui/material";



export const  GridContent  = styled(Grid)`
    padding: 0 60px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    
    form{
        width: 100%;
        max-width: 400px;
        display: grid;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        grid-template-rows: 1fr;
        gap: 10px;
        margin-top: 20px;

    }



`