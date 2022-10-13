import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";



export const StatusContainer = styled(Box)`
    max-width: 1440px;
    margin: 2rem auto;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 4rem;

    .MuiCard-root {
        /* remover valores padrao*/
        margin: 0;
        width: 250px;
        max-width: 250px;
        height: 150px;
        max-height: 100%;
        background-color: #FDC201;

        .MuiCardContent-root {
            display: grid;
            flex-direction: column;
            grid-template-columns: 4fr 1fr;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            padding: 1rem;
            height: 100%;
            width: 100%;
            max-width: 100%;
            max-height: 100%;
            position: relative;

            .MuiTypography-h5 {
                font-size: 1.5rem;
                font-weight: 600;
                text-transform: uppercase;
                color: #fff;
            }
            .MuiTypography-h6 {
                font-size: 1.5rem;
                font-weight: 600;
                color: #fff;
            }

            .icon {
                display: inline-block;
                margin-right: auto;
                width: 50px;
                height: 50px;
                color: #c09b1a;
            }
        }
    }
`;

export const BoxHeader = styled(Grid)`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    .MuiButton-root {
        /* align end         */
        margin: 1rem 0;
        background-color: #fdc201;
        font-weight: 600;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;

        &:hover {
            background-color: #fdd369;
        }
    }
`;


export const GridContentPanel = styled(Grid)`
    padding: 0 60px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-width: 1440px;

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
        border-radius: 5px;

        /* animated background */
        background: #fff;
        animation: gradient 5s ease infinite;

        border: 1px solid #fdc201;
        /* create border in linear gradient */

        .MuiCardContent-root {
            /* create three columns       */
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            height: 100%;
            max-width: 100%;
            padding: 0 2rem;

            justify-content: center;

            .MuiTypography-h3 {
                font-size: 1.5rem;
                font-weight: 400;
                color: #323232;
                text-transform: uppercase;
            }
            .MuiTypography-h5 {
                margin-top: 1rem;
                font-size: 20px;
                font-weight: 600;
                font-family: 'Open Sans', sans-serif;
                text-align: start;
                color: #323232;
                .MuiTypography-body1 {
                    font-size: 14px;
                    font-weight: 600;
                    font-family: 'Open Sans', sans-serif;
                    text-align: start;
                    color: #323232;
                }
            }
        }

        .MuiCardActions-root {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.8rem;
            width: 100%;
            height: 100%;
            max-width: 100%;
            z-index: 1;
            padding: 0 2rem;
            align-items: center;
            justify-content: end;
            

            .MuiButton-root:first-of-type {
                font-size: 16px;
                font-weight: 600;
                color: #fff;
                font-family: 'Open Sans', sans-serif;
                background-color: #fdc201;
            }
            .MuiButton-root {
                font-size: 16px;
                font-weight: 600;
                color: #fff;
                font-family: 'Open Sans', sans-serif;
                background-color: #30cc78;
            }
            .MuiButton-root:last-of-type {
                font-size: 16px;
                font-weight: 600;

                font-family: 'Open Sans', sans-serif;
                background: #fa6800;
                border: 1px solid #fa6800;
            }
        }

        max-width: 90rem;
    }

    /* create respnsive grid and card */
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 40px;
        gap: 2rem;
        margin: 1rem 0;

        .MuiCard-root {
            width: 100%;
            min-height: 40vh;
            margin: 0 auto;

            .MuiCardContent-root {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr;
                gap: 2rem;

                .MuiTypography-root {
                    margin-top: 1rem;
                    font-size: 12px;
                    gap: 2rem;
                    text-align: center;
                    font-weight: 800;
                    font-family: 'Open Sans', sans-serif;
                }
            }
            .MuiCardActions-root {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.8rem;
                width: 100%;
                height: 100%;
                .MuiButton-root:first-of-type {
                    font-size: 10px;
                    font-weight: 600;
                    color: #fff;
                    font-family: 'Open Sans', sans-serif;
                    padding: 0.5rem 1rem;
                }
                .MuiButton-root {
                    font-size: 10px;
                    font-weight: 600;
                    color: #fff;
                    font-family: 'Open Sans', sans-serif;
                    padding: 0.5rem 1rem;
                }
                .MuiButton-root:last-of-type {
                    font-size: 10px;
                    font-weight: 600;
                    color: #fff;
                    font-family: 'Open Sans', sans-serif;
                    padding: 0.5rem 1rem;
                }
            }
        }
    }
`;

