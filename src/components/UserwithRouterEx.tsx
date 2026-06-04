import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

interface userProp {
    userId?:number
}
export function UserwithRouterEx(props:userProp) {
    const id = useParams();
    const [searchQuery, setSearchQuery] = useSearchParams()
    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    const ref = useRef(1)
    const location = useLocation()

    useEffect(()=>{
        ref.current++
        console.log(ref.current)
        console.log(location);
        console.log(location.pathname)
    })
    
    if(nav) {
        return <Navigate to={'/profile'} state={{abc:"satae from location"}}/>  //u need to return so that code should never come below
        //state can be used inside <navigate/> UseNaviagte() hook and <Link >
    }

    return <>
        <h1>I am User {props.userId} and id {id.userId}</h1>
        <button onClick={()=>setSearchQuery({college:"mce",branch:"ECE"})}>Set Query</button>
        <button onClick={()=>setSearchQuery({})}>Clear Query</button>
        {searchQuery? searchQuery.get("branch"): null}
        <button onClick={()=>navigate('/about')}>Go to About</button>
        <button onClick={()=>navigate(-2)}>Go 2 back</button>
        <button onClick={()=>setNav(true)}>Go to profile</button>
        <button onClick={()=>{
            import('./Utils/Sum').then(module=>console.log("sum " + module.sum(2,3)))
        }}>Calculate code splitting sum</button> 
        {/* this is how u do for named import, you can check under network tab; after clicking here, it will crete sepaerte budle file */}
        <button onClick={()=>{
            import('./Utils/Diff').then(module=>console.log("diff " + module.default(5,2)))
        }}>Calculate code splitting diff</button>
        {/* this is how u do for default import, you can check under network tab; after clicking here, it will crete sepaerte budle file */}

    </>
}