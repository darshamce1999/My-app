import React, { useState } from "react";
import { Checkbox, FormControl, FormHelperText, FormLabel } from "@mui/material"
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export const CheckboxComp = () => {
    return <>
            <Checkbox defaultChecked color="warning" onChange={()=>console.log("Checkbox")}></Checkbox>
        </> 
}

export const CheckboxWithFormContrl = () => {
    return (
    <FormControl color="error" variant="filled" required component={"fieldset"}>
        <FormLabel error component="legend">Relationship Status</FormLabel>
        <FormGroup row>
            <FormControlLabel value= "single" control={<Checkbox defaultChecked/>} label="Are u single" labelPlacement="bottom" disableTypography required
                onChange={(event:React.SyntheticEvent, value) => console.log(event)} />
            <FormControlLabel value= "not ready to mingle" control={<Checkbox defaultChecked/>} label="Ready to mingle" labelPlacement="top"
                onChange={(event:React.SyntheticEvent, value) => console.log(value)} />
        {/* event.target.checked not working in MUI refer https://github.com/mui/material-ui/issues/41843 */}
        </FormGroup>
        <FormHelperText>We'll never ever share your email.</FormHelperText>
    </FormControl>
    )
}

export const CheckboxWithSkills = () => {
    const [skills, setSKills] = useState({React:false, Angular:false});

    console.log(skills)
    return (
    <FormControl color="error" variant="filled" required component={"fieldset"}>
        <FormLabel error component="legend">Skills</FormLabel>
        <FormGroup row>
            <FormControlLabel value= "React" control={<Checkbox checked={skills.React}/>} label="React" labelPlacement="bottom"
                onChange={(event:React.SyntheticEvent, value) => setSKills({...skills, React:!skills.React})} />
            <FormControlLabel checked={skills.Angular} value= "Angular" control={<Checkbox />} label="Angular" labelPlacement="top"
                onChange={(event:React.SyntheticEvent, value) => setSKills({...skills, Angular:!skills.Angular})} />
        </FormGroup>
        <FormHelperText>We'll never ever share your email.</FormHelperText>
    </FormControl>
    )
}