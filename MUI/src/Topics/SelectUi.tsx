import { Box ,TextField,MenuItem } from '@mui/material'
import { ChangeEventHandler, useState } from 'react';

function SelectUi() {
       const [countery, setCountery] = useState<string[]>([]);
       const handleTakeSelections = (event: React.ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              setCountery(typeof value === "string" ? value.split(",") : value); 
       };
       console.log(countery);
       return (
         <Box width={"250px"}>
           <TextField
             label="Select countery"
             select
             fullWidth
             SelectProps={{ multiple: true }}
              value={countery}
              onChange={handleTakeSelections}
           >
             <MenuItem value="India">India</MenuItem>
             <MenuItem value="USA">USA</MenuItem>
             <MenuItem value="UK">UK</MenuItem>
             <MenuItem value="Austrailia">Austrailia</MenuItem>
           </TextField>
         </Box>
       );
}

export default SelectUi
