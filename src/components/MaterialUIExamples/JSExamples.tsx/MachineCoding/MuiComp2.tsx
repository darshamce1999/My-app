import { ArrowCircleDown, CheckBox } from '@mui/icons-material'
import { CircularProgress, FormControlLabel, FormGroup, IconButton, Switch } from '@mui/material'
import React, { useState } from 'react'

function MuiComp2() {
    const [state, setState] = useState("")

  return (
    <div>
        {/* <label>
          <input type='checkbox' value={"isMail"} checked={state} onChange={(e) => {
            console.log(e)
            setState(e.target.checked)
          }}/>
          IsMail {state ? "Yes": "No"}
        </label> */}
        {/* {state ? "Yes": "No"} */}
        <label>
          <input type='radio' name='gendee' value={"male"} checked={state == "male"} onChange={(e) => {
            console.log(e)
            setState(e.target.value)
          }}/>
          Male
        </label>
        <label>
          <input type='radio' name='gendee' value={"female"} checked={state == "female"} onChange={(e) => {
            console.log(e)
            setState(e.target.value)
          }}/>
          Female
        </label>
        {/* {state ? "Yes": "No"}
        <Switch checked={state} onChange={(e) => setState(e.target.checked)}/> */}
        {/* {state}
        <select onChange={(e) => setState(e.target.value)} >
          <option value={"male"}>Male</option>
          <option value={"female"}>Female</option>
          <option value={"NA"}>Can't disclose</option>
        </select> */}
        {/* <CircularProgress /> */}
        {/* {state ? "Yes": "No"}
        <IconButton onClick={() => setState(!state)}><ArrowCircleDown/></IconButton> */}
    </div>
  )
}

export default MuiComp2