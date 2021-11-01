import React, { useState } from "react";
import Background from "../image/zone1.png";
import Video1 from "../video.mp4";
import html2canvas from 'html2canvas'


export default function Zone1() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [stateMenu, setstateMenu] = useState(false);
  //     const [useS,useSet]=useState(`<video
  //     loop
  //     autoPlay
  //     playsinline
  //     preload

  //     src="${Video1}"
  //     class="vide"
  //   />`)


    const exportAsPicture = (id) => {
        var html = document.getElementsByTagName('HTML')[0]
        var body =  document.getElementsByTagName('BODY')[0]
        var htmlWidth = html.clientWidth;
        var bodyWidth = body.clientWidth;
        
        var data = document.getElementById(`${id}`)
        var newWidth = data.scrollWidth - data.clientWidth

        
        if (newWidth > data.clientWidth){
            htmlWidth += newWidth 
            bodyWidth += newWidth
        }
        console.log("hhhss",htmlWidth,bodyWidth)
        html.style.width = htmlWidth + 'px'
        body.style.width = bodyWidth + 'px'

        
        html2canvas(data).then((canvas)=>{
            var image = canvas.toDataURL('image/png', 0.5);
            return image
        }).then((image)=>{
            saveAs(image, 'vis.png') 
            html.style.width = null
            body.style.width = null
        })
    }

    const saveAs = (blob, fileName) =>{
        var elem = window.document.createElement('a');
        elem.href = blob
        elem.download = fileName;
        // elem.style = 'height:600px;width:600px';
        (document.body || document.documentElement).appendChild(elem);
        if (typeof elem.click === 'function') {
            elem.click();
        } else {
            elem.target = '_blank';
            elem.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
            }));
        }
        URL.revokeObjectURL(elem.href);
        elem.remove()
    }

  return (
    <div
      className=" items-center justify-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",

        height: " 100vh",
      }}
    >
      <div>
        {/* {alert(window.innerHeight)} */}
        <iframe
          style={{
            position: "absolute",
            top: "1.5%",
            left: " 53.5%",
            height: "100%",
            width: "30%",
          }}
          class=" "
          src="https://player.vimeo.com/video/615756692"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>{" "}
        {/* <div class="dropdown relative">
 <div class="h-100 pt2 ph3 white-80 flex items-center flex-column justify-center pointer hover-bg-white-10 ">
            <img
              class="mr2 pr1"
              height="22"
              width="20"
              src="/svgs/icons/more.svg"
              alt="moreIcon"
            />
            <div class="flex items-center  pb2 pt1 justify-center">
              <div class=" f8 pv1 ">More </div>
              <img
                class="pl1 "
                src="/svgs/downArrowFilled.svg"
                alt="downArrowFilled"
              />
            </div>
          </div>
          <div
            class="bg-navy absolute w45 dropdown-content z-99999"
            style={{ top: "4.3rem", right: 0 }}
          >
            <div
              class="ph3 pv2 white-80 flex items-center hover-bg-white-10 justify-start pointer "
              style={{
                width: "85%",
              }}
            >
              <div>
                <img
                  alt="/svgs/icons/stadium-icon.svg"
                  height="22"
                  width="20"
                  src="/svgs/icons/stadium-icon.svg"
                />
              </div>
              <div class="ma0 pb0 pt1 nowrap pl2  pb2 f7">Stadiums</div>
            </div>
            <div class="ph3 pv2 white-80 flex items-center hover-bg-white-10 justify-start pointer ">
              <div>
                <img
                  alt="/svgs/icons/rankings-icon.svg"
                  height="22"
                  width="20"
                  src="/svgs/icons/rankings-icon.svg"
                />
              </div>
              <div class="ma0 pb0 pt1 nowrap pl2  pb2 f7">Rankings</div>
            </div>
            <div class="ph3 pv2 white-80 flex items-center hover-bg-white-10 justify-start pointer ">
              <div>
                <img
                  alt="/svgs/GroupArchive.svg"
                  height="22"
                  width="20"
                  src="/svgs/GroupArchive.svg"
                />
              </div>
              <div class="ma0 pb0 pt1 nowrap pl2  pb2 f7">Archives</div>
            </div>
            <div class="ph3 pv2 white-80 flex items-center hover-bg-white-10 justify-start pointer ">
              <div>
                <img
                  alt="/svgs/icons/records-icon.svg"
                  height="22"
                  width="20"
                  src="/svgs/icons/records-icon.svg"
                />
              </div>
              <div class="ma0 pb0 pt1 nowrap pl2  pb2 f7">Records</div>
            </div>
            <div class="ph3 pv2 white-80 flex items-center hover-bg-white-10 justify-start pointer ">
              <div>
                <img
                  alt="/svgs/fantasynav.svg"
                  height="22"
                  width="20"
                  src="/svgs/fantasynav.svg"
                />
              </div>
              <div class="ma0 pb0 pt1 nowrap pl2  pb2 f7">Season Fantasy</div>
            </div>
            <div class="ph3 pv2 white-80 flex items-center hover-bg-white-10 justify-start pointer ">
              <div>
                <img
                  alt="/svgs/icons/profile.svg"
                  height="22"
                  width="20"
                  src="/svgs/icons/profile.svg"
                />
              </div>
              <div class="ma0 pb0 pt1 nowrap pl2  pb2 f7">Profile</div>
            </div>
          </div>
        </div> */}
        <div
          style={{
            position: "absolute",
            top: "38.5%",
            left: "25.5%",
            width: "100%",
            // opacity:1,

            background: "",
            zIndex: 40,
            height: 20,
          }}
          onMouseOver={() => setstateMenu(false)}
          className=""
        ></div>
        <div
          style={{
            position: "absolute",
            top: "38.5%",
            left: "15.5%",
            width: "10%",
            opacity: 1,
            height: 104,

            background: "",
            zIndex: 3,
          }}
          onMouseOver={() => setstateMenu(false)}
          className=""
        ></div>
        <div
          style={{
            position: "absolute",
            top: "40.5%",
            left: "25.5%",

            zIndex: 3,
          }}
          className=""
        >
          <div class="h-100 pt2 ph3 flex items-center flex-column justify-center pointer hover-bg-white-10 ">
            <img
              onMouseOver={() => setstateMenu(true)}
              // onMouseLeave={() => setstateMenu(false)}
              class="mr2 pointer pr1"
              height="22"
              width="80"
              src={require("../image/doc.gif").default}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "49.5%",
            left: "25.5%",

            // width: "8%",
            zIndex: 3,
          }}
          className=""
          onMouseLeave={() => setstateMenu(false)}
        >
          {stateMenu && (
            <div
              className="flex bg-red   flex-column z-99999"
              style={{
                top: "16%",
                right: 0,
                position: "",
                width: "20rem",
              }}
            >
              <div className="pointer bg-red ma2" onClick={() => alert(8)}>
                12345678901234567892345678908sssssss765
              </div>
              <div
                className="pointer bg-pink ma2"
                onClick={() => alert("ontent")}
              >
                ontent 2
              </div>
              <div
                className="pointer bg-yellow ma2 "
                onClick={() => setShowPopUp(true)}
              >
                ontent 3
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className=" absolute z-max  pointer"
        style={{ top: "52%", right: 20 }}
        onClick={() => setShowPopUp(true)}
      >
        <img
          className="h2-3 w2-3"
          src={require("../image/prof.png").default}
          alt=""
        />
      </div>

      {showPopUp && (
        <div
          className="flex w-100   justify-center shadow-4 items-center fixed absolute--fill z-9999 bg-black-20"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div className=" w-30   flex justify-center items-center mh3 br3 overflow-hidden">
            <div className="w-100  flex  items-center justify-center ">
              <div className="flex  flex-column items-center justify-center w-100 ">
               

                <div id="exportContainer1" className="flex  flex-column h5 w-100  box ">
                {/* <div
                  className=" w-100 flex items-end justify-end pointer "
                  onClick={() => setShowPopUp(false)}
                >
                  X
                </div> */}
                  <div className="pa3 flex  flex-column ">
                  <div className="w-100  flex  ">
                    <div className="flex w-90 white f4 flex  flex-column">
                      {" "}
                      <div className="fw7 mt2">{localStorage.getItem("userName")}</div>
                      <div className="fw5 mt2">ICAI</div>{" "}
                    </div>
                    <div className="flex w-20 ">
                      {" "}
                      <img
                        className="h33  "
                        src={require("../image/prof.png").default}
                        alt=""
                      />{" "}
                    </div>
                  </div>

                  <div className="flex w-100  flex-column  mt5 white">
                    <div className="white mt3 fw7">  {localStorage.getItem("userEmail")}</div>{" "}
                    <div className="white mt3">  123456789098</div>{" "}
                  </div>
                </div>
                </div>
                <div className="flex mt2" style={{background:'transparent'}}>
                  <div className="mh2 white pointer" onClick={()=>exportAsPicture("exportContainer1")}>Download</div>
                  <div className="mh2 white pointer" onClick={() => setShowPopUp(false)}>Close</div>
                </div>

               
                {/* 
                  <div className=" flex items-center justify-center ">
                    {" "}
                    <img
                      className="h33"
                      src={require("../image/prof.png").default}
                      alt=""
                    />
                  </div>
                  <div className=" flex items-center justify-center mv2 fw6  ">
                    {" "}
                  sss  Name :{" "}
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
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
