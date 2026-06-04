import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';

export function StarRating2() {
    const [overState, setOverState] = useState<number>(-1)
    const [clickState, setClickState] = useState<number>(-1)

    return (
        <p>
            {new Array(5).fill('').map((item, index) => {
                return (
                    <IconButton onClick={(e) => setClickState(index)} onMouseMove={(e) => setOverState(index)} onMouseOut={(e) => setOverState(-1)}>
                        {((clickState >= index && overState == -1) || overState >= index) ? <StarIcon color='warning'/>: <StarBorderIcon />}
                    </IconButton>
                );
            })}
        </p>
    );
}
