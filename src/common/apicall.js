import React, { Component,useEffect,useState } from 'react'
import axios from 'axios'
import api from "../image/apifront.png";
import { useLocation } from 'react-router-dom';


class apicall22 extends Component {
  state={
    data:{}
  }
    
         req = async () => {
            const response = await axios.get('https://dog.ceo/api/breeds/list/all')
            if(response.status==200)
            {
                // alert(4)
                this.setState({data:'s'})
            }
          }
    
    componentDidMount() {
        this.interval = setInterval(() => this.req(), 3000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render() {
        return (
            <div>
                ssssss
            </div>
        )
    }
}

// https://jsonplaceholder.typicode.com/comments?postId=1


export default  function Apicall(props) {
  const location = useLocation();
console.log("11==",location.pathname);
  // console.log('props====>>>>>>>>>>>>>>>>>>',props)
    const [rom,setRom]=useState(1)
    const [dataScore,setScoreData]=useState([])



    const scoreCalulate=(zoneView)=>{
    let score=0
      zoneView.map(item=>{
        console.log("xx",item)
        if(item=='zone1'){
          score=score+50
        }
        if(item=='zone2'){
          score=score+50
        }
        if(item=='zone3'){
          score=score+50
        }
        if(item=='expo'){
          score=score+50
        }
        if(item=='audo'){
          score=score+50
        }
      
       
      })
      return score
    }

   const  req = async () => {
        let response = await axios.post('http://localhost:3002/leaderboardscore', {userEmail: "kunal@gmail.com"})
      
        setScoreData(response.data)
        if(response.status==200)
        {
            setRom(rom+1)
            

        }
      }
    
// useEffect(async() => {
//   let response = await axios.post('http://localhost:3002/leaderboardscore', {userEmail: "kunal@gmail.com"})
//   console.log("1111=>>>>>>",response.data.totalScore)
//   setScoreData(response.data)
//   return () => {
   
//   }
// }, [])
console.log("dataScoredataScore",dataScore.zoneAttend)

      useEffect(async() => {
          let timer1 = setTimeout(async() => {
            let response = await axios.post('http://localhost:3002/leaderboardscore', {userEmail: "kunal@gmail.com"})
         
          setScoreData(response.data)
          }, 5000);
          
          return () => {
           clearTimeout(timer1);
          };
        },
       
        [dataScore]
      );
    return (
      <>
        <div className="absolute z-max bg-red" style={{top:'5%',left:'3%'}}> =====BackTOLObby </div>
      <div
      className="api flex items-center justify-center"
     
    >

    
          <div className="flex items-center justify-center flex-column w-70  sticky" 
     >
            <div className="flex mt4 items-center justify-center w-90 ">
              <div className="flex  items-center justify-center  ba b--red w-15 white fw6 ttu pa1 h3">Rank</div>

              <div className="flex  items-center justify-center ba b--red  w-35  white fw6 ttu pa1 h3 ">Name</div>
              <div className="flex  items-center justify-center ba  b--red w-35  white  fw6 ttu pa1 h3">Email</div>
              <div className="flex  items-center justify-center ba  b--red w-15   white fw6 ttu pa1 h3">Points</div>
            </div>

<div className="w-100  flex flex-column items-center justify-center" style={{maxHeight:'280px', overflowY: 'scroll'}}>
           {dataScore&&dataScore.zoneAttend&& dataScore.zoneAttend.map((item,index)=>{return(
           <div className="bl  br bb b--red flex items-center justify-center h2-3 pa1 w-90 ">
              <div className="flex  items-center justify-center   w-15 white  lh-copy">{index+1}</div>

              <div className="flex  items-center justify-center  mh1 w-35  white lh-copy">{item.userName}</div>
              <div className="flex  items-center justify-center   w-35 white  lh-copy">{item.userEmail}</div>
              <div className="flex  items-center justify-center  mh1 w-15 white  lh-copy">{scoreCalulate(item.zoneView)}</div>
            </div>

           )}) 
            }

</div>
          </div>
        </div>
        </>
    )
}
