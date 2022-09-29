import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";


export const ProfileContainer = styled(Grid)`
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 60px;
    max-width: 1440px;

    @media (max-width: 768px) {
        margin-top: 15rem;
        padding: 0 35px;
    }
`;

export const BoxProfile = styled(Box)`
    height: 50vh;
    width: 100%;
    background: linear-gradient(180deg, #FBBC05 0%, #FA8900 100%);
    display: flex;
    justify-content: space-evenly;
    
    align-items: center;
    padding: 20px 0;
    gap: 0 24rem;
    position: relative;
    box-shadow:  0 0 10px 0 rgba(0,0,0,0.5);
    z-index: -1;

    .user-logo{
        display: grid;
        place-items: center;
        align-self: flex-start;
        width: 100px;
        height: 100px;

        img{
            display: block;
            margin-left:  auto;
            margin-right: auto;
            width: 250px;
            height: 250px;
        }

        .MuiTypography-root{
            margin-top: 1rem;
            font-size: 20px;
            font-weight: 800;
            font-family: 'Open Sans', sans-serif;
            line-height: 14px;
            text-align: center;
            color: #FFFFFF;
        }



            
    }
      .user-grid{
        /* create 2 columns and 2 rows */
        display: grid;
        justify-content: flex-end;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0 2rem;
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        align-items: center;

        .MuiTypography-body1{
            font-size: 20px;
            font-weight: 800;
            font-family: 'Open Sans', sans-serif;
            text-align: start;
            color: #FFFFFF;
        }
        .MuiTypography-subtitle1{
            margin-top: 10px;
            font-size: 16px;
            font-weight: 600;

            font-family: 'Open Sans', sans-serif;
            text-align: start;
            color: #FFFFFF;
        }

        
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem 0;
        padding: 10px 0;

        .user-logo{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                box-shadow:  inset 0 0 10px 0 rgba(0,0,0,0.5);
                border-radius: 50%;
            }
        }
        .user-grid{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            gap: 2rem 0;
            width: 100%;
            height: 100%;
            padding: 0 2rem;
            align-items: center;
        }


    }
 
`

export const BoxContentProfile = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
    grid-column: 1 / 3;

    padding: 0 2rem;
    width: 100%;
    height: 100%;
    margin-top: -10rem;

    .MuiTypography-h5 {
        font-size: 26px;
        width: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 0 6rem;
        font-weight: 800;
        font-family: 'Open Sans', sans-serif;
        text-align: start;
        color: #fab604;
        hr {
            width: 120px;
            height: 2px;
            border: none;
            background: #fdc201;
        }
    }
    .MuiTypography-subtitle1 {
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        text-align: start;
        color: #fab604;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0 1rem;
        li {
            display: flex;
            align-items: center;
            gap: 0 1rem;
            .MuiTypography-subtitle1 {
                font-size: 16px;
                font-weight: 600;
                font-family: 'Open Sans', sans-serif;
                text-align: start;
                color: #fab604;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem 0;
        padding: 10px 0;
        margin-top: 0;
        .MuiTypography-h5 {
            font-size: 26px;
            width: 100%;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            gap: 0 6rem;
            font-weight: 800;
            font-family: 'Open Sans', sans-serif;
            text-align: start;
            color: #fab604;
            hr {
                width: 20px;
                height: 2px;
                border: none;
                background: #fdc201;
            }
        }
        .MuiTypography-subtitle1 {
            font-size: 16px;
            font-family: 'Open Sans', sans-serif;
            text-align: start;
            color: #fab604;
        }
        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0 1rem;
            li {
                display: flex;
                align-items: center;
                gap: 0 1rem;
                .MuiTypography-subtitle1 {
                    font-size: 16px;
                    font-weight: 600;
                    font-family: 'Open Sans', sans-serif;
                    text-align: start;
                    color: #fab604;
                }
            }
        }
    }
`;
