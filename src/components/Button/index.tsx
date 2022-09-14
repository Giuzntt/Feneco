import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { ButtonStyled } from "./styles";


// pls button component react router use link
interface IButtonProps {
    variant?: "text" | "outlined" | "contained";
    color?: "default" | "inherit" | "primary" | "secondary";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    startIcon?: React.ReactNode;
    children: React.ReactNode;
}


// Pensar em uma maneira criar um botão reutilizavel em várias telas com React Router Dom

const theme = createTheme({
    palette: {
        primary: {
            main: "#FCC400",
        }
    },
})



export  function  CustomButton ({variant, color, size, fullWidth, startIcon, children}: IButtonProps) {
    return (
    <ThemeProvider theme={theme}>

        <ButtonStyled
            
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            startIcon={startIcon}
            >
            {children}
        </ButtonStyled>
    </ThemeProvider>
    )
}


// Language: typescript