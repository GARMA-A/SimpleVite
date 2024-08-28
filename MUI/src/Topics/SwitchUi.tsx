import {Box , FormControlLabel , Switch} from '@material-ui/core'
import { useState } from 'react'

function SwitchUi() {
       const [checked, setChecked] = useState(false)
       console.log(checked);
       const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
              setChecked(e.target.checked)
       }
       return (
         <Box>
           <FormControlLabel
             control={<Switch value={checked} onChange={handleCheck} />}
             label="Switch"
           />
         </Box>
       );
}

export default SwitchUi
