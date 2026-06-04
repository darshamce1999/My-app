import { Box, Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

export const DrawerComp = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return <>
        <Button variant='contained' onClick={toggleDrawer(true)}>Open Drawer</Button>
        <Drawer variant="temporary" open={open} sx={{width:"20%"}} onClose={toggleDrawer(false)}>
            <Box sx={{width:250}}>Lorem ipsniet ipsam sequi laborum! Nihil esse, possimus soluta eius corporis beatae quibusdam vitae id magnam nam dolorum.
            </Box>
        </Drawer>
    </>
}