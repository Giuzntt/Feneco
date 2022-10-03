import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";


export const LoginContainer = styled(Container)`
    margin: 0 auto;
`;

export const BoxLogin = styled(Box)`
  /* align center image */
  width: 450px;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 15px;
  align-items: center;
  justify-content: center;
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;

    }
.icon{
    font-size: 20px;
}

`;

// usestyles mui v5

