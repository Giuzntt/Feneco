import styled from "@emotion/styled";
import { Grid } from "@mui/material";






export const GridCourse = styled(Grid)`
    max-width: 1440px;
    margin: 1rem auto;
    padding: 1rem 60px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #facd3c;

    .MuiTypography-h2 {
        font-size: 3.5rem;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        color: #fff;
    }
    .MuiTypography-subtitle1 {
        font-size: 1.2rem;
        font-weight: 300;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
    }

    .box-title {
        width: 100%;
        background-color: #feda62;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        padding: 1rem 2rem;
        .MuiTypography-body1 {
            font-family: 'Open Sans', sans-serif;
            font-size: 1.2rem;
            font-weight: 200;
            color: #fff;
            padding: 0 1rem;
            /* justify text */
            text-decoration: j;
        }
    }

    .MuiTypography-h6 {
        margin: 1rem 0;
        font-size: 1.5rem;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        color: #fff;
    }
    .box-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;


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
                max-width: 100%;
                height: auto;
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