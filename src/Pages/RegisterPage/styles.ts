import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";




export const BoxRegister = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap:  1rem 20px; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const GridItem = styled(Grid)`
    img{
        width: 60%;
        height: 60%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

`

export const BoxRegisterTwo = styled(Box)`
    display: grid;
    width: 100%;
    grid-row-gap: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`
