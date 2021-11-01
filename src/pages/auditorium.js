import React,{useState} from 'react'
// import Auditorium from './auditorium';
import Video1 from "../video.mp4";
import { Link } from 'react-router-dom';

export default function Auditorium() {
    const [stateMenu, setstateMenu] = useState(false);

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
   
      <div
        dangerouslySetInnerHTML={{
          __html: `
      ${useS},
     `,
        }}
      ></div>{" "}
      <div>
        <div className="f1"></div>
      </div>
    </div>
  );
}
