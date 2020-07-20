import React from "react";

import AnimatedButton from "./animated_button"
function Header(){
    
    return <div>
        <header className="header">
        <div className="logo-box">
            <img className="logo" src ="./../images/logo_main.png" alt="logo"></img>            
        </div>
        <div className=
        "text-box">
    <h1 className="heading-primary">
    <span className="heading-primary-main">R:SOCIETY</span>
    <span className="heading-primary-sub">You can make a change</span>
    </h1>
    <AnimatedButton />
    </div>
 
    </header>
  
    </div>;
}
export default Header;