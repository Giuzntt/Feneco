import { Box, styled } from "@mui/material";



export const BoxHeader = styled(Box)`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    gap: 120px;
    
`;    
export const BoxWork = styled(Box)`
    background-color: #FDC201;
    border: 1px solid #FDC201;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 10px;
    max-width: 600px;
    min-height: 200px;
    margin: 0 auto;

    ul li {
        /* align center */
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFF;

        gap: 10px;
        list-style: none;
    }
`;    
