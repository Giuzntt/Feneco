import { createTheme, ThemeProvider } from "@mui/material";
import { TextFieldCustom } from "./styles";

interface ITextFieldProps {
  placeholder: string;
  disabled?: boolean;
  type?: string;
  value?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FCC400",
    },
  },
});

export const CustomTextField: React.FC<ITextFieldProps> = ({
  placeholder,
  type,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <TextFieldCustom
        className="input"
        id="outlined-basic"
        fullWidth
        type={type}
        placeholder={placeholder}
        variant="outlined"
        margin="normal"
      />
    </ThemeProvider>
  );
};

// Language: typescript
