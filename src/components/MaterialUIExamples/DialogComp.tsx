import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState } from 'react';


export const DialogComp = () => {
    const [open, setOpen] = useState(false)

    return <>
        <Button variant='contained' onClick={()=>setOpen(true)}>Open dialog</Button>
        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle >Error while submitting</DialogTitle>
            <DialogContent dividers>Lorem ipsum dolor sit, amet consectetur adipisicing elitus veniam cumque, ipsa et itaque.</DialogContent>
            <DialogActions disableSpacing={true}><Button onClick={()=>setOpen(false)}>Close</Button><Button onClick={()=>setOpen(false)}>Retry</Button></DialogActions>
        </Dialog> 
        </>
}