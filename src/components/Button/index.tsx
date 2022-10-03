import { createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ButtonStyled } from "./styles";


// pls button component react router use link
interface IButtonProps {
    variant?: "text" | "outlined" | "contained";
    size?: "small" | "medium" | "large";
    // fullWidth?: boolean;
    startIcon?: React.ReactNode;
    children: React.ReactNode;
    to: string;
    onClick?: () => void;

}


// Pensar em uma maneira criar um botão reutilizavel em várias telas com React Router Dom

const theme = createTheme({
    palette: {
        primary: {
            main: "#FCC400",
        }
    },
})



export  function CustomButton({ variant, size, startIcon, children, to, onClick }: IButtonProps) {
    return (
        <ThemeProvider theme={theme}>
            <Link to={to} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                <ButtonStyled variant={variant} size={size} fullWidth startIcon={startIcon} onClick={onClick}>
                    {children}
                </ButtonStyled>
            </Link>
        </ThemeProvider>
    );
}




// Language: typescript