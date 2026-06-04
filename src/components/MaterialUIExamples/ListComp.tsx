import { Avatar, List, ListItemIcon, ListItemText } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import HomeIcon from '@mui/icons-material/Home';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';


export function ListComp() {
    return <List subheader={<ListSubheader>Car</ListSubheader>} sx={{width:"20%"}}>   
        <ListItem divider={true}>
            <ListItemButton>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText>
                Punch
            </ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem alignItems="flex-start">
            <ListItemButton>
                Nexon
            </ListItemButton>
        </ListItem>
        <ListItem divider={true}>
            <ListItemButton>
            <ListItemAvatar>
                <Avatar>
                    <HomeIcon />
                </Avatar>
             </ListItemAvatar>
            <ListItemText>
                XUV 300
            </ListItemText>
            </ListItemButton>
        </ListItem>
    </List>
}