import { Stack } from "@mui/material"

export const StackComp = () => {
    
    return <Stack direction={"column-reverse"}>
        <p style={{backgroundColor: 'lightGrey'}}>Item 1</p>
        <p style={{backgroundColor: 'lightGrey'}}>Item 2</p>
        <p style={{backgroundColor: 'lightGrey'}}>Item 3</p>
    </Stack>
}