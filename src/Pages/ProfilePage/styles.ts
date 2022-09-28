import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";


export const ProfileContainer = styled(Grid)`
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 60px;
    max-width: 1440px;
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
            width: 200px;
            height: 200px;
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
 
`

