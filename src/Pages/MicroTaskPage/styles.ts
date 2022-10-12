import styled from "@emotion/styled";
import { Box, CardContent, Grid } from "@mui/material";


export const GridContainer = styled(Grid)`
    min-height: 80vh;
    padding: 0 60px;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .MuiCard-root {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 60px;
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        border-radius: 10px;

        .MuiCardContent-root {
            /* create three columns       */
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 1fr;
            gap: 1rem;
            padding: 1rem;
            margin: 0 auto;
            max-width: 1440px;
            width: 100%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;

            .MuiTypography-h5 {
                font-weight: bold;
                text-transform: uppercase;
                font-size: 18px;
                font-family: 'Open Sans', sans-serif;
                color: #000;
            }

            .MuiTypography-body1 {
                font-size: 14px;
                font-family: 'Open Sans', sans-serif;
                color: #000;
            }
        }

        .MuiCardActions-root {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.8rem;
            width: 100%;

            .MuiButton-root {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.8rem;
                width: 100%;
                color: #fff;
                font-size: 14px;
                font-family: 'Open Sans', sans-serif;
                font-weight: bold;
                text-transform: uppercase;

                &:first-child {
                    background-color: #30cc78;
                }
                &:last-child {
                    background-color: #fa6800;
                }
            }
        }
    }
`;

export const BoxTask = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: calc(1rem + 2vw);

    .MuiTypography-h5 {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
        color: #cccccc;
    }

    .MuiButton-root {
        /* align end         */
        background-color: #fdd369;
        font-weight: 600;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;

        &:hover {
            background-color: #fdd369;
        }
    }
`;


export const CardContentCandidato = styled(CardContent)`
    display: grid;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    justify-content: center;
    align-items: center;

    .MuiTypography-root {
       
    }        

`


