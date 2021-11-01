import React from 'react'
import ZoneName from '../common/zoneName'
export default function Test() {
    return (
        <div className=" ">
            {console.log('sss', window.innerHeight)}
            <div className="w-100 h-100">
    <img  src={require('../image/back.jpg').default} class="bg" />
    </div>

    {/* window.innerHeight */}
    <ZoneName  path="/zone1" height={window.innerHeight<700? "5rem":'6rem'} width={"9rem"} fontSize="16px" name="Zone 1" top={ window.innerHeight<700?"58%":'50%'}
     left="13%" />
 

    <ZoneName  height="5rem" width="9rem"  fontSize="16px" name="Zone 2" top="58%" left="26%" />
    <ZoneName height="5rem" width="9rem"  fontSize="16px" name="Zone 3" top="58%" left="38%" />
    <ZoneName height="5rem" width="9rem"  fontSize="16px" name="Zone 4" top="58%" left="52%" />
  
    <ZoneName height="5rem" width="9rem"  fontSize="16px" name="Zone 5" top="58%" left="64%" />
    <ZoneName height="5rem" width="9rem" fontSize="16px" name="Zone 6" top="58%" left="77%" />
    {/* bottom zone */}
    <ZoneName height="6rem" width="11rem" fontSize="16px" name="Zone 7" top="74%" left="3%" />
    <ZoneName height="6rem" width="11rem" fontSize="16px" name="Zone 8" top="74%" left="19%" />
    <ZoneName height="6rem" width="11rem" fontSize="16px" name="Zone 9" top="74%" left="35%" />
    <ZoneName height="6rem" width="11rem" fontSize="16px" name="Zone 10" top="74%" left="51%" />
   <ZoneName height="6rem" width="11rem" fontSize="16px" name="Zone 11" top="74%" left="67%" />
   <ZoneName height="6rem" width="11rem" fontSize="16px" name="Zone 12" top="74%" left="84%" />

        </div>
  
        
    )
}                                                                                                                                                                                                                                                                                
