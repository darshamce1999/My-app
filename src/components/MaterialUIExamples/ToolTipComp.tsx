import { Alarm } from "@mui/icons-material"
import { Tooltip } from "@mui/material"

export const ToolTipComp = () => {

    return (<>
        <span>New Tooltip</span>
        <Tooltip title="ALarm" arrow placement={"top-end"}>
            <Alarm />
        </Tooltip>
        </>)
}