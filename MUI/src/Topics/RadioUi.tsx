import {Box,FormControl,FormControlLabel,FormLabel,Radio,RadioGroup} from '@material-ui/core';
import { useState } from 'react';
function RadioUi() {
       const [value, setValue] = useState('');
       const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { setValue(event.target.value) };
       console.log(value);
       return (
              <Box>
                     <FormControl component="fieldset">
                            <FormLabel component="legend">     
                                   Years of Experience
                            </FormLabel>
                            <RadioGroup name="experience"  value={value} onChange={handleChange}>
                                   <FormControlLabel value="0-1" control={<Radio />} label="0-1" />
                                   <FormControlLabel value="1-3" control={<Radio />} label="1-3" />
                                   <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
                                   <FormControlLabel value="5+" control={<Radio />} label="5+" />
                            </RadioGroup>
                     </FormControl>
                     
              </Box>
       )
}

export default RadioUi
