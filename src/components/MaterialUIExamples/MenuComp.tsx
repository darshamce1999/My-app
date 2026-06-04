import { Button, Menu, MenuList } from "@mui/material"
import { useState } from "react"
import MenuItem from '@mui/material/MenuItem';


export function MenuComp() {
    // const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function closeMenu() {
        setAnchorEl(null);
    }

    return <>
        <Button onClick={(event)=>setAnchorEl(event.currentTarget)}>Open Menu</Button>
        <Menu open={!!anchorEl} 
            onClose={closeMenu}
            anchorEl={anchorEl}
            // variant="menu"
        >
            <MenuItem onClick={closeMenu} selected>Profile</MenuItem>
            <MenuItem onClick={closeMenu}>My account</MenuItem>
        </Menu>
    </>
}

export function MenuListComp() {
    // const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function closeMenu() {
        setAnchorEl(null);
    }

    return <>
        <MenuList 
            dense
        >
            <MenuItem onClick={closeMenu}>Profile</MenuItem>
            <MenuItem onClick={closeMenu}>My account</MenuItem>
        </MenuList>
    </>
}