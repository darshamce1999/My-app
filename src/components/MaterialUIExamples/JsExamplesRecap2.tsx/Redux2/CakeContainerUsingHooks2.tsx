import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './Cake/CakeAction';

function CakeContainerUsingHooks2() {

    const state:any = useSelector((state) => state);
    const dispatch:any = useDispatch()

  return (
        <>
            <div>{state.cake.noOfCakes}</div>
            <Button onClick={() => dispatch(buyCake())}>Buy Cake</Button>
        </>
  )
}

export default CakeContainerUsingHooks2