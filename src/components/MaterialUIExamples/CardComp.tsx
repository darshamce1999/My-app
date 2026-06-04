import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';


export const CardComp = () => {
    return <Card sx={{width:"25%"}} raised>
        <CardHeader title="See the nature" subheader="Village" action={<MoreVertIcon />}></CardHeader>
        <CardMedia
            component="img"
            height="194"
            image="https://w0.peakpx.com/wallpaper/42/267/HD-wallpaper-nature-scenery-scenery-nature.jpg"
            alt="Paella dish"
        />
        <CardContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quae rem aliquidmus, quos ipsum. Optio, laboriosam deleniti</CardContent >
        <CardActions disableSpacing><Button>Expand more</Button></CardActions>
    </Card>
}