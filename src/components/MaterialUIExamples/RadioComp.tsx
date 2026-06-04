import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';

export const RadioComp = () => {
    const [gender, setGender] = useState<string>()

    return <>
    <FormControl>
    <FormLabel>Gender</FormLabel>
    <RadioGroup 
        onChange={(event, value)=>{
            console.log(event)
            console.log(value)
            setGender(value)
        }}
    >
        <FormControlLabel control={<Radio/>} label="male" value="male" />
        <FormControlLabel control={<Radio/>} label="female" value="female"/>
    </RadioGroup>
    </FormControl>
    <p>You are {gender}</p>
    </>
}