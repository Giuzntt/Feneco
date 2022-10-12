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

export  function CustomButton({ variant, size, startIcon, children, to, onClick }: IButtonProps) {
    return (
        <Link to={to} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <ButtonStyled
                variant={variant}
                size={size}
                fullWidth
                startIcon={startIcon}
                onClick={onClick}
                sx={{
                    backgroundColor: '#FDC201',
                    color: '#fff',
                    border: '1px solid #FDC201',
                    '&:hover': {
                        backgroundColor: '#FDC201',
                        color: '#fff',
                        border: '1px solid #FDC201'
                    }
                }}
            >
                {children}
            </ButtonStyled>
        </Link>
    );
}




// Language: typescript