import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

function MaterialUI2() {
  const [state, setState] = useState('')

  return (
    <>
        {/* <Button variant='contained' color='success' sx={{margin: 2}} title='abc'>Click Me</Button> */}

        {/* <Checkbox  />
        <FormControlLabel control={<Checkbox />} label="Are u Boy"/>
        <FormControlLabel control={<Checkbox />} label="Are u Good Boy"/> */}

        <div>U are {state}</div>
        <FormControl>
          <InputLabel id="abc">Gender</InputLabel>
          <Select value={state} sx={{margin: 10}} label={"Gender"} fullWidth onChange={(event) => {
              console.log(event.target.value)
              setState(event.target.value as string)
            }}
            labelId='abc'
            id="demo-simple-select"
          >
            <MenuItem value={"boy"}>Boy</MenuItem>
            <MenuItem value={"girl"} >Girl</MenuItem>
          </Select>
        </FormControl>
    </>
  )
}

export default MaterialUI2