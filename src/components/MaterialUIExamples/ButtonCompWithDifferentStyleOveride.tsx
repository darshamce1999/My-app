import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
// import styled from '@emotion/styled';
import './ButtonStyle.css'

export const ButtonCompWithDifferentStyleOveride = () => {
    const StyledButton = styled(Button)({
        color:"yellow",
        '&.Mui-focusVisible': {
                    backgroundColor: 'grey'
        },
    })

    return <>
            <Button color='primary' variant='contained' sx={
                {color:"pink",
                '&.Mui-focusVisible': {
                    backgroundColor: 'red'
                },
                '&.MuiButton-root:hover':{
                    border: "5px solid red"
                }}} 
                onClick={()=>{console.log('Button clicked')}}
            >Button comp</Button>
            <StyledButton variant='contained'>Styled Buttom</StyledButton>
            <Button className='Button'>ClassName button</Button> 
            {/* By overidring with applyong css class */}
            <Button sx={{color: "black", backgroundColor:"aqua"}}>Sx overidring button</Button> 
        </>
}