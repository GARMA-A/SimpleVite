import { ToggleButton, ToggleButtonGroup , Stack } from "@mui/material"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";


function ToggleUi() {
       const [formats, setFormats] = useState<string[]>([]);
       const [format, setFormat] = useState<string>("");
       // the default is to send the array of all pressed buttons 
       const handleFormatChangeDefault = (_event: React.MouseEvent<HTMLElement>, newFormats: string[]) => { setFormats(newFormats) };
       // exclusive is to send only the last pressed button
       const handleFormatChangeExclusive = (_event: React.MouseEvent<HTMLElement>, newFormat: string) => { setFormat(newFormat) };
       console.log(format);
       return (
         <Stack direction={"row"}>
           <ToggleButtonGroup
             value={format}
             onChange={handleFormatChangeExclusive}
             aria-label="text formatting"
             size="small"
             color="success"
             orientation="vertical"
             exclusive
           >
             <ToggleButton value={"bold"}>
               <FormatBoldIcon />
             </ToggleButton>
             <ToggleButton value={"italic"}>
               <FormatItalicIcon />
             </ToggleButton>
             <ToggleButton value={"underline"}>
               <FormatUnderlinedIcon />
             </ToggleButton>
           </ToggleButtonGroup>
         </Stack>
       );
}

export default ToggleUi;
