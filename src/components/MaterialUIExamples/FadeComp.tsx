import { Box, Button, Fade } from "@mui/material";
import { useState } from "react";

export function FadeComp() {
    const [open, sOpn] = useState(false)

    return <>
        <Button variant="contained" onClick={()=>sOpn(!open)}>Open</Button>
        <Fade in={open} timeout={830}>
            <Box width={"300px"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi, voluptas eligendi soluta fuga minima quibusdam aliquam praesentium, perferendis iusto nemo. Libero, aspernatur? Iusto necessitatibus veniam excepturi, illo exercitationem cumque.
            </Box>
        </Fade>
    </>
}
