import { Stack, Button ,IconButton ,ButtonGroup } from "@mui/material"
import SendIcon from "@mui/icons-material/Send";



function ButtonUi() {
       return (
         <Stack spacing={2} direction={"column"} alignItems={"center"}>
           {/*variant */}
           <Button variant="text" href="https://google.com">
             Text
           </Button>
           <Button variant="contained">contained</Button>
           <Button variant="outlined">outlined</Button>
           {/*colors */}
           <Stack direction={"row"}>
             <Button color="primary">Primary</Button>
             <Button variant="contained" color="secondary">
               Secondary
             </Button>
             <Button color="error">Error</Button>
             <Button variant="contained" color="warning">
               Warning
             </Button>
             <Button color="info">Info</Button>
             <Button variant="outlined" color="success">
               Success
             </Button>
           </Stack>
           {/*Sizes */}
           <Stack spacing={2}  display={"block"}>
             <Button variant="contained" size="small">
               Small
             </Button>
             <Button variant="contained" size="medium">
               {" "}
               Medium
             </Button>
             <Button variant="contained" size="large">
               {" "}
               Large
             </Button>
           </Stack>
           <Stack spacing={2} direction={"row"}>
             <Button
               variant="contained"
               startIcon={<SendIcon />}
               disableTouchRipple
               disableFocusRipple
               disableElevation
             >
               Send
             </Button>
             <Button
               variant="contained"
               endIcon={<SendIcon />}
               onClick={() => console.log("Send")}
             >
               Send
             </Button>
             <IconButton color="success" size="large">
               <SendIcon />
             </IconButton>
           </Stack>
           {/*Button Group */}
              <Stack spacing={2} direction={"row"}>
              <ButtonGroup variant="contained" color="error" orientation="vertical" size="small"  arial-label="alignment button gropup">
              <Button >Left</Button>
              <Button >Center</Button>
              <Button >right</Button>
              </ButtonGroup>
           </Stack>
         </Stack>
       );
}

export default ButtonUi
