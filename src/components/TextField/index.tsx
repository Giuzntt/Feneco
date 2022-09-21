import { createTheme, FormControl, FormHelperText, ThemeProvider } from "@mui/material";
import { OutlinedInputStyled, TextFieldCustom } from "./styles";

interface ITextFieldProps {
  placeholder: string;
  label?: string;
  disabled?: boolean;
  helperText?: string;
  type?: string;
  multiline?: boolean;
  value?: string;
  endArdoment?: JSX.Element;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
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
  disabled,
  multiline,
  helperText
}) => {
  return (
    <ThemeProvider theme={theme}>
     
         
          <TextFieldCustom
          className="input"
          id="outlined-basic"
          fullWidth
          helperText={helperText}
          value={value}
          multiline={multiline=== true ? multiline : false}
          onChange={onChange}
          type={type}
          label={placeholder}
          variant="outlined"
          margin="normal"
          disabled ={disabled === true ? disabled : false} 
        />
        
    </ThemeProvider>
  );
};

export const CustomOutlinedInput:React.FC<ITextFieldProps> = ({
  placeholder,
  type,
  onChange,
  onBlur,
  value,
  endArdoment,
}) => {

    return (
      <ThemeProvider theme={theme}>
        <FormControl variant="outlined">
          <OutlinedInputStyled
            className="input"
            id="outlined-adornment-weight"
            fullWidth
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            autoFocus
            type={type}
            placeholder={placeholder}
            inputProps={{
              "aria-label": "weight",
            }}
            aria-describedby="outlined-weight-helper-text"
            endAdornment={endArdoment}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Preencha seu CEP
          </FormHelperText>
        </FormControl>
      </ThemeProvider>
    );
};


// Language: typescript
