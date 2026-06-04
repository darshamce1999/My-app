import "./Header.css"
import styles from "./Head.module.css"
import { Link, useLocation } from "react-router-dom";


export function HeaderComp() {
    const inlinestyle= {backgroundColor:"green", color:"pink"};

    const location = useLocation()

    console.log(location.state)

    return <>
        <p className={"head"}>I am HeaderComp</p>
        <p className={styles.head}>I am HeaderComp</p>
        <p style={{backgroundColor:"blue", color:"pink"}}>I am HeaderComp</p>
        <p style={inlinestyle}>I am HeaderComp</p>
        <p>I am with tag style in module.css</p>
        <Link to={'aboutTech'} style={{color:"black"}} >Tech Version</Link>
    </>
}

export function AboutTech() {

    return <>
        <h1>I am About tech</h1>
        <Link to={'techVersion'} style={{color:"black"}} >Go to tech</Link>
    </>
}

export function TechVersion() {

    return <>
        <h1>Tech version</h1>
    </>
}