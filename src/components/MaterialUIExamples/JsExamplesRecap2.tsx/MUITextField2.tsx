import { Autocomplete, FormControl, Input, InputLabel, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'


// function MUITextField2() {
//     const [state, setState] = useState('')

//   return (
//     <>
//         <TextField onChange={(event) => setState(event.target.value)}
//             color='secondary' 
//             variant='outlined' 
//             helperText="Please enter"
//         />
//         <p>{state}</p>
//     </>
//   )
// }

// function MUITextField2() {
//     const [state, setState] = useState('')

//   return (
//     <>
//         <TextField onChange={(event) => setState(event.target.value as string)}
//             color='secondary' 
//             variant='outlined' 
//             helperText="Please enter"
//             select
//             value={state}
//         >
//             <MenuItem value={"10"}>10</MenuItem>
//             <MenuItem value={"20"}>20</MenuItem>
//             <MenuItem value={"30"}>30</MenuItem>
//         </TextField>
//         {state}
//     </>
//   )
// }

// function MUITextField2() {
//     const [state, setState] = useState('')

//   return (
//     <>
//     <FormControl>
//         <Input onChange={(event) => setState(event.target.value)} type='text' autoComplete='section-blue shipping address-level'/>
//         <InputLabel variant='outlined'>Please enter input</InputLabel>
//     </FormControl>
//     <p>{state}</p>
//     </>
//   )
// }

function MUITextField2() {
    const [state, setState] = useState<any>({})

    const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  }]

  return (
    <>
        <Autocomplete sx={{width: "200px"}} options={top100Films} renderInput={(params) => <TextField {...params} />}
            onChange={(event, value) => {
                setState(value)
            }}
        />
        {state && <p>{state.label}</p>}
    </>
  )
}


export default MUITextField2