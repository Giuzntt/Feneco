import styled from "@emotion/styled";
import { Grid } from "@mui/material";


export const BoxHeader = styled(Grid)`
    max-width: 1440px;
    padding: 0 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  
    .MuiButton-root {
        /* align end         */
        margin-left: auto;
        background-color: #FDD369;
        font-weight: 600;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;     

       
      &:hover {
        background-color: #FDD369;
      }
    }

`


export const GridContentPanel = styled(Grid)`
  padding: 0 60px;
  margin: 0 auto;
  flex-direction:  column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 1440px;

  
  .MuiCard-root{
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
    box-shadow:  0 0 10px 0 rgba(0,0,0,0.5);
    border-radius: 10px;
    background-color: #fff;
  

    .MuiCardContent-root{
      /* create three columns       */
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr;
      gap: 0 2rem;
      width: 100%;
      height: 100%;
      padding: 0 2rem;
      align-items: center;

      justify-content: centert;
      .MuiTypography-h5{
        margin-top: 1rem;
        font-size: 20px;
        font-weight: 800;
        font-family: 'Open Sans', sans-serif;
        text-align: start;
        color: #000000;
      }
    }

    .MuiCardActions-root{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      width: 100%;
      height: 100%;
      padding: 0 2rem;
      align-items: center;
      justify-content: end;

      .MuiButton-root:first-of-type{
        font-size:  16px;
        font-weight: 600;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        background-color: #FDD369;

      }
      .MuiButton-root{
        font-size:  16px;
        font-weight: 600;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        background-color: #30CC78;
      } 
      .MuiButton-root:last-of-type{
        font-size:  16px;
        font-weight: 600;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        background-color: #FA6800;
      }


    }

  
    max-width: 90rem;

  }

  /* create respnsive grid and card */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 40px;

    .MuiCard-root{
      width: 100%;
      min-height: 40vh;
      margin: 0 auto;

      .MuiCardContent-root{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0 2rem;

        .MuiTypography-root{
          margin-top: 1rem;
          font-size: 12px;
          gap: 2rem;
          text-align: center;
          font-weight: 800;
          font-family: 'Open Sans', sans-serif;
      }

  }
  .MuiCardActions-root{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    height: 100%;
    .MuiButton-root:first-of-type{
      font-size:  10px;
      font-weight: 600;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      padding: 0.5rem 1rem;
    }
    .MuiButton-root{
      font-size:  10px;
      font-weight: 600;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      padding: 0.5rem 1rem;
    }
    .MuiButton-root:last-of-type{
      font-size:  10px;
      font-weight: 600;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      padding: 0.5rem 1rem;
    }

  }
}
}

  
   



`;

