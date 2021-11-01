import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function Header() {
  const location = useLocation();
// console.log("11==",location.pathname);
  return (
    location.pathname!=="/api"  && location.pathname!=="/leaderboard"&& <div className="flex items-center mt3  justify-center w-100" style={{position:'absolute',top:'3%'}}>
     
      <div className="w-10 flex flex-column z-999 items-center justify-center">
        <Link to="/lobby">
          {" "}
          <img className="h2-3" src={require("../image/icon.svg").default} />
        </Link>
        <div>Lobby</div>
      </div>
      
      <div className="w-10 flex flex-column z-999 items-center justify-center">
        <Link to="/auditorium">
          {" "}
          <img className="h2-3" src={require("../image/icon.svg").default} />
        </Link>
        <div>auditorium</div>
      </div>
      <div className="w-10 flex flex-column z-999 items-center justify-center">
        <Link to="/expo">
          {" "}
          <img className="h2-3" src={require("../image/icon.svg").default} />
        </Link>
        <div>Expo</div>
      </div>
      <div className="w-10 flex flex-column z-999 items-center justify-center">
        <Link to="/breakout">
          {" "}
          <img className="h2-3" src={require("../image/icon.svg").default} />
        </Link>
        <div>Breakout Hall</div>
      </div>
      <div className="w-10 flex flex-column z-999 items-center justify-center">
        <Link to="/photobooth">
          {" "}
          <img className="h2-3" src={require("../image/icon.svg").default} />
        </Link>
        <div>photobooth</div>
      </div>
      <div className="w-10 flex flex-column z-999 items-center justify-center">
        <Link to="/Games">
          {" "}
          <img className="h2-3" src={require("../image/icon.svg").default} />
        </Link>
        <div>Games</div>
      </div>
      <div className="w-10 flex flex-column z-999 items-center justify-center">
        <Link to="/speaker">
          {" "}
          <img className="h2-3" src={require("../image/icon.svg").default} />
        </Link>
        <div>Speaker</div>
      </div>
    </div>
  );
}
