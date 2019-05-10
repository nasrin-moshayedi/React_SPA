import React from "react";
// material-ui imports
import MenuItem from "@material-ui/core/MenuItem";


function MainPage(props) {
  return (
    <div className="main-grid" style={{display:'flex', justifyContent: "space-between"}}>
        <div className="" style={{height:'auto', width:'auto', background: 'white'}}>
            <h2 className="logoN logo">N</h2>
            <h3 className="logo">NASRIN</h3>

            <div className="text-degree"><a href="#" className="text-degree" >skills</a></div>
            <div className="text-degree"><a className="text-degree" href="#">portfolio</a></div>
        </div>
      <div style={{width:"100%"}}>
        <div className="menu" style={{display: "flex", justifyContent: 'baseline', height:60}}>
            <MenuItem className="center-menu-item">contact us</MenuItem>
            <MenuItem className="center-menu-item">about me</MenuItem>
            <MenuItem className="center-menu-item">home</MenuItem>
        </div>
        <div className = "image">
            <div className="image-text">
                <h1>Hello</h1>
                <h1>I'M Nasrin Moshayedi</h1>
                <h2>Frontend Developer</h2>
            </div>
        </div>
      </div>

    </div>
  );
}

export default MainPage;
