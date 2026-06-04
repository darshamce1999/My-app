import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function AccordionComp() {
    const [expand, setExpand] = useState(false)

    return <><Accordion  sx={{width:"50%"}}>
        <AccordionSummary sx={{"&.MuiButtonBase-root:focus":{ backgroundColor: 'lightgray'}}} expandIcon={<ExpandMoreIcon />}>Select employee</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
    </Accordion>
    <Accordion sx={{width:"50%"}} expanded={expand} onChange={(event, isExpand)=>{
        console.log(isExpand)
        return setExpand(isExpand)}}>
    <AccordionSummary sx={{"&.MuiAccordionSummary-root:focus":{ backgroundColor: 'pink'}}} expandIcon={<ExpandMoreIcon />}>Select employee</AccordionSummary>
    <AccordionDetails>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
    <AccordionActions>
      <Button>Cancel</Button>
      <Button>Agree</Button>
    </AccordionActions>
</Accordion>
</>
}