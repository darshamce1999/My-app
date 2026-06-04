import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


export const AutocompleteComp =  () => {
    const movie = ['KGF',"Kantara", "Adyaksha"]

    return <><Autocomplete 
                sx={{width:'200px'}}
                options={movie}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <br />
            </>
}

export const AutocompleteArryObjComp =  () => {
    const movie = [{label:'KGF', Year:2019},{label:'Kantara', Year:2021}, {label:'Adyakasha', Year:2017}]

    return <><Autocomplete 
                sx={{width:'200px'}}
                options={movie}
                renderInput={(params) => <TextField {...params} label="Movie"/>}
                defaultValue={{label:'Adyakasha', Year:2017}}
                renderOption={(props, option) => {
                    return <p  key={option.label}>{option.label + " " + option.Year}</p>
                }}
                getOptionLabel={(option) => option.label}
                
            />
            <br />
            </>
}

export const AutocompleteWithLogic =  () => {
    const [options, setOptions] = useState<{label: string, Year: number}[]>();
    const movie = [{label:'KGF', Year:2019},{label:'Kantara', Year:2021}, {label:'Adyakasha', Year:2017}]

    function hamdleOptions(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const aaa = movie.filter((data)=>data.label.toLowerCase().startsWith(event.target.value))
        setOptions(aaa)
    }

    return <Autocomplete 
                sx={{width:'200px'}}
                options={options? options: []}
                freeSolo
                renderInput={(params) => <TextField {...params} label="Movie" onChange={(event)=>hamdleOptions(event)}/>}
                onChange={(event, data)=>console.log(data)}
            />
}
