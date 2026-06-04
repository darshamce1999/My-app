import { Box, Button, Popover, Popper } from "@mui/material"
import { useState } from "react"

export function PopoverComp() {
    // const [on, sOpn] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    

    return <>
        <Button variant="contained" onClick={handleClick}>Open</Button>
        <Popover open={!!anchorEl} anchorEl={anchorEl} 
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
         }}
         transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={()=>setAnchorEl(null)}
         >
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }} >
                The content of the Popper.
            </Box>
        </Popover>
    </>
}


export function PopperComp() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };


    return <> <button  type="button" onClick={handleClick}>
            Toggle Popper
        </button>
        <Popper open={!!anchorEl} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            The content of the Popper.
            </Box>
        </Popper>
        </>
}