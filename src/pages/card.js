import html2canvas from 'html2canvas'

const HtmlCanvasDemo = (id) =>{

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
            var image = canvas.toDataURL('image/png', 1.0);
            return image
        }).then((image)=>{
            saveAs(image, 'exported-vis.png') 
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
    <>
    {/* <div className="parent">
        <div id="exportContainer" >
            <h1>HERE IS A REALLY LONG TITLE TO DEMONSTRATE HOW TO <br />
                 COMPENSATE FOR OVERFLOW ITS
                 <br /> STILL GOING
                 <br /> OMG WHEN DOES IT END OK NOW.</h1>
        </div>
    </div>
    <button onClick={exportAsPicture}>screenshot</button> */}


    <div className=" items-center justify-center w-100 flex  ">
        <div  className="w-30 flex-column flex  items-center justify-center mh2  parent"><div  id="exportContainer1"  className="w-100 bg-green h3 w5">111</div>
        <button  onClick={()=>exportAsPicture("exportContainer1")}>screenshot</button></div>

        <div className="w-30 flex-column flex  items-center justify-center  mh2 "><div  id="exportContainer2"  className="w-100 bg-red  h3 w5">13</div>
        <button onClick={()=>exportAsPicture("exportContainer2")}>screenshot</button></div>


        <div className="w-30 flex-column flex  items-center justify-center   mh2 "><div  id="exportContainer3"  className="w-100 bg-pink  h3 w5">15</div>
        <button onClick={()=>exportAsPicture("exportContainer3")}>screenshot</button></div>



    </div>


    </>)
};

export default HtmlCanvasDemo;