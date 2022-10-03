import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material";



interface ISelectProps {
    label: string;
    options: {
        value: string | number;
        label: string;
    }[];    
    value: string;
    onChange: (event: SelectChangeEvent) => void;
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#FCC400",
    },
  },
  
});

export const SelectField: React.FC<ISelectProps> = ({ label, options, value, onChange }) => {
    return (
      <Box sx={{ minWidth: 120 }}>
        <ThemeProvider theme={theme}>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
            onChange={onChange}
            sx={{ width: "400px", height:'60px', backgroundColor: "white" ,
            
                
          }}
          
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value} sx={{width:'100%'}}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
                </ThemeProvider>
      </Box>
    );
                    }
                
