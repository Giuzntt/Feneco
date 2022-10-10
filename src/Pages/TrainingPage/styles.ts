import styled from "@emotion/styled";
import {  Grid } from "@mui/material";



export const GridContainer = styled(Grid)`
    min-height: 100vh;
    padding: 0 60px;
    margin: 0 auto;
    max-width: 1440px;
    display: grid;
    position: relative;

    .card-banner {
        width: 100%;
        box-shadow:  0 0 0 0;
        margin: 1rem auto;
        max-width: 1180px;
        height: 100%;
        max-height: 314.23px;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background: none;
        .MuiCardMedia-root {
            display: block;
            width: 550px;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
            z-index: 1;
        }
        .MuiCardContent-root {
            display: block;
            z-index: 1;
            color: #fff;
        }
        .MuiButton-root {
            z-index: 1;
            color: #fff;
            background: #fdc201;
            padding: 0.5rem 1.5rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #f5cf51 0%, #fdc201 100%);
            opacity: 0.8;
            z-index: 1;
        }
    }

    .MuiBox-root {
        position: relative;
        margin: 0 auto;
        max-width: 1440px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10rem;
        grid-template-columns: 2fr 1fr;

        .MuiCard-root {
            max-width: 250px;
            border-radius: 1rem;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease-in-out;

            .MuiCardMedia-root {
                width: 100%;
                max-height: 200px;
                overflow: hidden;
                object-fit: cover;
            }
            .MuiCardContent-root {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                .MuiTypography-root {
                    font-size: 0.8rem;
                    font-weight: 600;
                }
                .MuiTypography-root:nth-of-type(2) {
                    font-size: 1rem;
                    font-weight: 400;
                }
            }
            .MuiCardActions-root {
                display: flex;
                gap: 1rem;
                .MuiButton-root {
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    font-size: 0.8rem;
                    font-weight: 600;
                    transition: all 0.3s ease-in-out;
                }
                .MuiButton-root:nth-of-type(1) {
                    background-color: #fdc201;
                    color: #fff;
                }
            }

            &:hover {
                transform: scale(1.05);
            }
        }
    }
`;


