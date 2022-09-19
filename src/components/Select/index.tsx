import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";



interface ISelectProps {
    label: string;
    options: {
        value: string | number;
        label: string;
    }[];    
    value: string;
    onChange: (event: SelectChangeEvent) => void;
}

export const SelectField: React.FC<ISelectProps> = ({ label, options, value, onChange }) => {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
            onChange={onChange}
            sx={{ width: "100%" }}
            
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value} sx={{width:'100%'}}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
                    }
                
