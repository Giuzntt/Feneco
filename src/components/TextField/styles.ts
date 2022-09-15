import styled from "@emotion/styled";
import { TextField } from "@mui/material";




export const TextFieldCustom = styled(TextField)`
font-family: 'Open Sans', sans-serif;
 .MuiInputBase-root{
        background-color: #fff;
        min-height: 60px;    
        

 }  
 & label.Mui-focused{
       overflow: hidden;
}



`;