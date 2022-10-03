import styled from "@emotion/styled";
import { OutlinedInput, TextField } from "@mui/material";




export const TextFieldCustom = styled(TextField)`
font-family: 'Open Sans', sans-serif;
 .MuiInputBase-root{
        background-color: #fff;
        min-height: 60px;    
        

 }  
 & label.Mui-focused{
       margin-top: 5px;
       overflow: hidden;
}



`;

export const OutlinedInputStyled = styled(OutlinedInput)`
  background-color: #FFF;
  font-size: 1.2rem;
  font-weight: 600;


  &:hover {
    background-color: #ffffff;
  }
`;