import React , {useState} from 'react';
import Display from './Display';
import Btn from './Btn';
import './index.css';
import { NavLink } from "react-router-dom";


function App() {
    //ms is MicroSecond
    //s is second
    //m is Minute
    //h is hour

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});

  //time is current time
  //setTime is use to update time
  //useState is initial time

  const [change, setChange] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
      console.log("it is working")
      //start is the function that performs action when we click on start button

    run();
    setStatus(1);
    setChange (
        setInterval(run, 10)
    )
    
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    //Now we updated the useState value using setTime
  };

  const pause = () => {
    clearInterval(change);
    setStatus(2);
    //when pause button is clicked we get status 2 where we have to display resume button and reset button and the timer display's value is set to the current value and it don't get update until unless other buttons are clicked
  };

  const reset = () => {
    clearInterval(change);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
    //when reset is clicked we set its value similar to the initial time and we set it's status to 0 so we get only start button after clciking reset button
  };

  const resume = () =>
   start();
   //here start() function is called inside resume hence after clicking resume button our time starts from the same postiton where we stoped it earlier.

   


  return (
      <>

      <div className="container__page">
               <div className="main__display">
               <Display time={time}/>
               </div>

               <div className="button__display">
               <Btn
                status={status}
                resume={resume} 
                reset={reset} 
                pause={pause} 
                start={start}
                />
                
                
               </div>
               <div className="home__display">
               <NavLink to ="/home"> <button className="button__view"> 
            View History 
        </button> </NavLink>
               </div>
               
               </div>
               
                </>
         
     
  );
}

export default App;
