import { createTheme, ThemeProvider } from "@mui/material";
import { TextFieldCustom } from "./styles";

interface ITextFieldProps {
  placeholder: string;
  disabled?: boolean;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
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
  onChange,
  value
}) => {
  return (
    <ThemeProvider theme={theme}>
      <TextFieldCustom
        className="input"
        id="outlined-basic"
        fullWidth
        value={value}
        onChange={onChange}
        type={type}
        label={placeholder}
        variant="outlined"
        margin="normal"
      />
    </ThemeProvider>
  );
};

// Language: typescript
