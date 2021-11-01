import React from "react";
import Tran from "../image/tranpanret.png";
import Header from "./header";
import Background from "../image/zone1.png";
import api from "../image/zone1.png";

export default function Stall() {

    function getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;
      
        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(userAgent)) {
          os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
          os = 'Linux';
        }
      
        return os;
      }
      
     
  return (
    <div className="background items-center justify-center">
      {/* <Header /> */}
      <div
        className={`ma5 z-2 b pointer ${getOS()=='Windows'?'top30':'top30mac'}  ph1 mt5 pa3
           flex w-90 justify-center items-center`}
      >
        <div className=" w-12 ma2    flex justify-center items-center ">
          <h1 className="">hellow1 {}</h1>
        </div>
        <div className=" w-12 ma2 mr4  flex justify-center items-center ">
          <h1>hellow2</h1>
        </div>
        <div className=" w-12 ma2 mr4  flex justify-center items-center ">
          <h1>hellow3</h1>
        </div>
        <div className=" w-12 ma2 mr4  flex  items-center ">
          <h1>hellow4</h1>
        </div>
        <div className=" w-12 ma2 mr4  flex items-center ">
          <h1>hellow5</h1>
        </div>
        <div className="w-12 ma2 mr4 flex  items-center  ">
          <h1>hellow6</h1>
        </div>

        {/* <div className="w-15 ma2 flex justify-center items-center  ">
            <img src={Tran} alt="" srcset="" />
          </div>
          <div className="w-15 ma2 flex justify-center items-center  ">
            <img src={Tran} alt="" srcset="" />
          </div>
          <div className="w-15 ma2  ">
            <img src={Tran} alt="" srcset="" />
          </div>
          <div className="w-15 ma2 ">
            <img src={Tran} alt="" srcset="" />
          </div> */}
      </div>
      <div
        className={` z-2  pointer ${getOS()=='Windows'?'top50':'top50mac'} mt5 
           flex w-90 justify-center items-center `}
 
      >
        <div className=" w-14 ma2  flex justify-end items-end ">
          <h1>bellow1</h1>
        </div>
        <div className=" w-14 ma2  flex justify-end items-end ">
          <h1>bhellow2</h1>
        </div>
        <div className=" w-14 ma2  flex justify-end items-end ">
          <h1>hellow3</h1>
        </div>
        <div className=" w-14 ma2  flex justify-end items-end ">
          <h1>hellow4</h1>
        </div>
        <div className="ml3 w-14 ma2  flex justify-end items-end ">
          <h1>hellow5</h1>
        </div>
        <div className="w-14 ma2 ml3 flex justify-end items-end  ">
          <h1>hellow6</h1>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex w-100  ma2  z-999 " style={{height:'10vh'}} >
<div className="w-15 mh2"><img src={Tran} alt="" srcset="" /></div>
<div className="w-15 mh2 bg-red"><img src={Tran} alt="" srcset="" /></div>
<div className="w-15 mh2 bg-red"><img src={Tran} alt="" srcset="" /></div>
<div className="w-15 mh2 bg-red"><img src={Tran} alt="" srcset="" /></div>
<div className="w-15 mh2 bg-red"><img src={Tran} alt="" srcset="" /></div>

<div className="w-15 mh2 bg-red"><img src={Tran} alt="" srcset="" /></div>

        </div> */
}
