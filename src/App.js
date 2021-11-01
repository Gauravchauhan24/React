import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Zone1 from "./common/zone1";
import Video1 from "./video.mp4";
// import { useEffect, useState } from 'react';
// import { useState } from 'react';
import Expo from "./common/stall";
import "./tachyons/css/tachyons.min.css";
// import '../tachyons/css/swiper.min.css';
import "./tachyons/css/style.css";
import Apicall from "./common/apicall";
import Header from "./common/header";
import Footer from "./common/footer";
import Homepage from "./pages/homepage";
import Test from "./pages/expohall";
import Breakout from "./pages/breakout";
import Auditorium from "./pages/auditorium";
// import Expo from "./pages/expo";
import Phtotobooth from "./pages/phtotobooth";
import Gamesarena from "./pages/gamesarena";
import Speaker from "./pages/speaker";
import Card from "./pages/card";
function App1() {
  return (
    <iframe
      className="vide "
      src="https://player.vimeo.com/video/564768113?autoplay=1&mute=0"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
    />
  );
}
export default function App(props) {
  const [popUpName, setPopDown] = useState(true);
  const [stateMenu, setstateMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  console.log("===>>>>>>", props);
  return (
    <Router>
      <div className="flex items-center justify-center w-100  ">
        <div
          className=" absolute z-max  pointer"
          style={{ top: "2%", right: 20 }}
          onClick={() => setShowProfile(true)}
        >
          <img
            className="h2-3 w2-3"
            src={require("../src/image/prof.png").default}
            alt=""
          />
        </div>
        {showProfile && (
          <div
            className="flex w-100   justify-center shadow-4 items-center fixed absolute--fill z-9999 bg-black-20"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className=" w-30   flex justify-center items-center mh3 br3 overflow-hidden">
              <div className="w-100  flex  items-center justify-center bg-white">
                <div className="flex pa3 flex-column items-center justify-center w-100 ">
                  <div
                    className=" w-100 flex items-end justify-end pointer "
                    onClick={() => setShowProfile(false)}
                  >
                    X
                  </div>
                  <div className=" flex items-center justify-center ">
                    {" "}
                    <img
                      className="h33"
                      src={require("../src/image/prof.png").default}
                      alt=""
                    />
                  </div>
                  <div className=" flex items-center justify-center mv2 fw6  ">
                    {" "}
                    Name :{" "}
                    <span className="fw4">
                      {localStorage.getItem("userName")}
                    </span>
                  </div>
                  <div className=" flex items-center justify-center mv2 fw6  ">
                    {" "}
                    Email :{" "}
                    <span className="fw4">
                      {localStorage.getItem("userEmail")}
                    </span>
                  </div>
                  <div className=" flex items-center justify-center mt2 fw5 pointer bg-red h2 w-50 br-pill  mt2 ">
                    {" "}
                    <span className=" white f6">Logout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {localStorage.getItem("login") == null && (
        <Route exact path="/">
          <Homepage />
        </Route>
      )}
      {localStorage.getItem("login") == null && (
        <>
          {/* <Header /> */}

          <div>
            <Switch>
              {/* <Route exact path="/test">
                <Test />
              </Route> */}
              <Route exact path="/video">
                <App1 />
              </Route>
              <Route exact path="/zone1">
                <Zone1 />
              </Route>

              <Route exact path="/lobby">
                <EmbedVideo />
              </Route>

              <Route exact path="/expohall">
                <Expo />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/leaderboard">
                <Apicall />
              </Route>

              <Route exact path="/breakout">
                <Breakout />
              </Route>
              <Route exact path="/auditorium">
                <Auditorium />
              </Route>
              <Route exact path="/expo">
                <Test />
              </Route>
              <Route exact path="/photobooth">
                <Phtotobooth />
              </Route>
              <Route exact path="/games">
                <Gamesarena />
              </Route>
              <Route exact path="/speaker">
                <Speaker />
              </Route>
              <Route exact path="/breakout">
                <Breakout />
              </Route>
              <Route exact path="/card">
                <Card />
              </Route>
            </Switch>
          </div>
          <div
            className="flex items-center mt3  justify-center w-100"
            style={{ position: "absolute", bottom: "4px" }}
          >
            {" "}
            <Footer />
          </div>
        </>
      )}
    </Router>
  );
}
const EmbedVideo = function (props) {
  const [popUpName, setPopDown] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(async () => {
    let timer1 = setTimeout(async () => {
      // alert('s')
      localStorage.setItem("firstTime", "ssssss");

      setPopDown(false);
    }, 5000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  const [stateMenu, setstateMenu] = useState(false);
  const [stateMenuAgenda, setstateMenuAgenda] = useState(false);
  const [agendaShow, setAgendaShow] = useState(false);

  const [useS, useSet] = useState(`<video
    loop
    autoPlay
    playsinline
    preload
    
    
    src="${Video1}"
    class="vide"
  />`);
  return (
    <div>
     
        {" "}
        <div
          onMouseOut={() => setstateMenuAgenda(false)}
          onMouseOver={() => setstateMenuAgenda(true)}
          onClick={() => setAgendaShow(true)}
          className={`
          flex   items-center justify-center absolute ${
            stateMenuAgenda ? " bg-white br3" : "bg-white br3"
          } black ttu fw6 pointer z-max`}
          style={{
            top: "48%",
            right: 0,
            width: stateMenuAgenda ? "10%" : "6%",
          }}
        >
          <div onClick={() => setAgendaShow(true)}>
            {" "}
            <img  className="h3" src={require("./image/lb.png").default} />
          </div>
          {stateMenuAgenda && <div onClick={() => setAgendaShow(true)} className="f7">Agenda</div>}
        </div>
    
      <Link to="/leaderboard">
        {" "}
        <div
          onMouseOut={() => setstateMenu(false)}
          onMouseOver={() => setstateMenu(true)}
          className={`
          flex   items-center justify-center absolute ${
            stateMenu ? " bg-white br3" : "bg-white br3"
          } black ttu fw6 pointer z-max`}
          style={{ top: "60%", right: 0, width: stateMenu ? "14%" : "6%" }}
        >
          <div>
            {" "}
            <img className="h3" src={require("./image/lb.png").default} />
          </div>
          {stateMenu && <div className="f6"> Leader Board</div>}
        </div>
      </Link>
      <div
        dangerouslySetInnerHTML={{
          __html: `
      ${useS},
     `,
        }}
      ></div>{" "}
      {agendaShow && (
        <div className="flex items-center justify-center w-100   ">
        
            <div
              className="flex w-100   justify-center shadow-4 items-center fixed absolute--fill z-9999 bg-black-20"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className=" w-40   flex justify-center items-center mh3 br3 ">
                <div className="w-100  flex  items-center justify-center bg-white">
                  <div className="flex pa3 flex-column items-center justify-center w-100 ">
                    <div
                      className=" w-100 flex items-end justify-end pointer "
                      onClick={() => setAgendaShow(false)}
                    >
                      X
                    </div>
                    <div className=" w-100 flex items-center justify-center " style={{overflow:'scroll'}}> 
                    <div><img
                        className=""
                        src={require("../src/image/agenda.png").default}
                        alt=""
                        style={{height:'auto'}}
                      /></div>
                    
                      
                    </div>
                  
               
                   
                  </div>
                </div>
              </div>
            </div>
         
        </div>
      )}
      <div>
        <div className="f1"></div>
      </div>
    </div>
  );
};
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
