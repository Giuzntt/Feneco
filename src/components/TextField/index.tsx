import { createTheme, ThemeProvider } from "@mui/material";
import { TextFieldCustom } from "./styles";

interface ITextFieldProps {
  placeholder: string;
  label?: string;
  disable: boolean;
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
  value, 
  disable
}) => {
  return (
    <ThemeProvider theme={theme}>
      {
        disable == true ?
          (
          <>
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
        </>
      ) : (
        <>
        <TextFieldCustom
        className="input"
        id="outlined-basic"
        fullWidth
        value={value}
        onChange={onChange}
        type={type}
        // label={placeholder}
        placeholder={placeholder}
        variant="outlined"
        margin="normal"
        disabled
        />
        </>
        )
        }
        </ThemeProvider>
  )
};

// Language: typescript
