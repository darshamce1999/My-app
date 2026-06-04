import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';


export function SelectComp() {
    const [car, setCar] = useState()

    const [brandCar, setBrand] = useState<string[]>([])

    const [age, setAge] = useState<string[]>([])

    return <>
        <select name="cars" id="cars"> 
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
        {/* html select lowercase s*/}

        <Select native={true} onChange={(event)=>console.log(event.target.name)}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </Select>
        {/* Select MUI with native-true will become normal HTML */}

        <br />
        <TextField select 
            value={brandCar} 
            onChange={(event)=>{
                const value = event.target.value;
                const a = typeof value === "string" ? value.split(','): value;
                setBrand(a)
            }}
            helperText="Please select your Brand"
            SelectProps={{multiple:true}}
            >
            <MenuItem value={"landrover"}>Landrover</MenuItem>
            <MenuItem value={"urus"}>Urus</MenuItem>
            <MenuItem value={"rollyroyce"}>Rolls Royce</MenuItem>
        </TextField>

        <br />
        <Box width={"250px"}>
        <Select 
            onChange={(event,child)=>{
                console.log(child) //2nd option will give seleted option element
                const value = event.target.value;
                const data = typeof value === "string"? value.split(','): value
                setAge(data)
            }} 
            fullWidth={true}
            onOpen={()=>console.log("opening select menu")}
            onClose={()=>console.log("closing select menu")}
            value={age}
            multiple
        >
            <MenuItem value={"20+"}>Above 20</MenuItem>
            <MenuItem value={"30+"}>Above 30</MenuItem>
            <MenuItem value={"40+"}>Above 40</MenuItem>
        </Select>
        </Box>

        <br />
        <FormControl 
            sx={{width:"150px"}}
        >
            <InputLabel>Age</InputLabel>
            <Select autoWidth={true}>
                <MenuItem value={"20+"}>Above 20</MenuItem>
                <MenuItem value={"30+"}>Above 30</MenuItem>
                <MenuItem value={"40+"}>Above 40</MenuItem>
            </Select>
        </FormControl>
    </>
}