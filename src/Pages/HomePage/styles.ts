import styled from "@emotion/styled";
import { Grid } from "@mui/material";






export const HomeContent = styled(Grid)`
  padding: 20px 160px;
  max-width: 1440px;
  display: grid;
  margin: 0 auto;
  display: grid;
  /* use max content */
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  flex-direction: column;

 
  @media (max-width: 768px) {
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
    padding: 10px 60px;
  }
`;