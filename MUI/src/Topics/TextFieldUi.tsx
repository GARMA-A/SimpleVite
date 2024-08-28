import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";


function TextFieldUi() {

       const [value, setValue] = useState("");
       return (
         <>
           <Stack direction={"column"} spacing={2}>
             {/*Default*/}
             <TextField label="First Name" variant="outlined" size="medium" />
             {/*Outlined*/}
             <TextField label="Last Name" variant="standard" size="small" />
             {/*Filled*/}
             <TextField
               label="Password"
               type="password"
               helperText="do not share it with anyone"
               variant="filled"
             />
             {/*ReadOnly*/}
             <TextField
               label="Email"
               defaultValue="myemail.email.com"
               variant="outlined"
               size="small"
               InputProps={{ readOnly: true }}
             />
             {/*Adorments*/}
             <TextField
               label="Weight"
               variant="outlined"
               size="small"
               InputProps={{
                 readOnly: true,
                 endAdornment: (
                   <InputAdornment position="start">Kg</InputAdornment>
                 ),
               }}
             />

             {/*Adorments*/}
             <TextField
               label="SecretId"
               variant="outlined"
               size="small"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
              helperText={value ?  "Do not share it with anyone":"Required" }
              color={value ? "secondary" : "error"}
             />
           </Stack>
         </>
       );
}

export default TextFieldUi;
