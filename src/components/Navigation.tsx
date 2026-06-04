import React from "react";
import { Link } from "react-router-dom";
import "./Style/DisplayStyles.css"

export const Navigation:React.FunctionComponent = () => {
    return <>
        <nav>
            <div className="flexbox">
                {/* <div><Link to={"/"}>Home</Link></div>
                <div><Link to={"/about"}>about</Link></div>
                <div><Link to={"/profile"}>profile</Link></div> */}
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>about</Link>
                <Link to={"/profile"}>profile</Link>
                <Link to={"/users"}>users</Link>
                <Link to={"/apps"}>Apps</Link>
                <Link to={"/bannedapps"}>BannedApps</Link>
            </div>
        </nav>
    </>
}