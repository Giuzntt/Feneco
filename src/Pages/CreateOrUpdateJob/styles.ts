import styled from "@emotion/styled";
import { Grid } from "@mui/material";



export const GridContent = styled(Grid)`
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


    .MuiButton-root{
        width: 100%;
        max-width: 400px;
        margin-top: 20px;
        background-color:#FDC201;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 16px;


    }
}



`;