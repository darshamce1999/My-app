import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import AlertTitle from '@mui/material/AlertTitle';


export const AlertComp = () => {
    return <Alert icon={<CheckIcon />} sx={{width:"30%"}} severity="success" variant="filled" closeText="CCC" action={<CloseIcon />}>
            <AlertTitle>Entry saved</AlertTitle>
        </Alert>
}