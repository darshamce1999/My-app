import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InputLabel from '@mui/material/InputLabel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FormControl } from '@mui/material';


export function InputComp() {
    const [name, setName] = useState("")
    return <FormControl>
    <Input name="Enter name" 
        // placeholder="Name"
        value={name} required
        startAdornment="MR"
        endAdornment={<CurrencyRupeeIcon />}
        onChange={(event)=>setName(event.target.value)}
        margin="dense"
        defaultValue="DD"
        autoFocus       
        autoComplete="section-blue shipping address-level"
        inputProps={{maxlength:"8"}}
        type="checkbox" 
        inputComponent="textarea"
        // in bettwen type="checkbox vs inputComponent, the inputComponent take more precidemcy
    />
    <InputLabel  variant="outlined">Please enter name</InputLabel>
    </FormControl>
}

export function TextFieldComp() {
    const [age, setAge] = useState("")

    return <>
            <TextField color="error" label="Enter age" name="age" placeholder="Please enter age here" onChange={(event)=>setAge(event.target.value)}
                helperText={!age? "Age is required": ""}
                inputProps={{maxlength:"8"}} //for html attributes
                InputProps={{startAdornment:<AccountCircleIcon />}}  //for MUi Input attributes in https://mui.com/material-ui/api/input/
                InputLabelProps={{color:"success"}}
                multiline
                maxRows={4}
            />
            <p>{age}</p>
        </>
    }

    export function TextFieldSelectComp() {
        
        return  <TextField color="error" label="Enter age" name="age" placeholder="Please enter age here" 
                helperText={"Age is required"}
                SelectProps={{}}
                select
                >
                    <p>aaa</p>
                    <p>bbb</p>
                </TextField>
    }