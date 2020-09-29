import React from 'react';

function Btn(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="btn__start"
        //on clicking start button the function start is call and 
        onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="btn__pause"
                  onClick={props.pause}>Pause</button>





                  <button className="btn__reset"
                  onClick={props.reset}>Reset</button>
          
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="btn__resume"
                  onClick={props.resume}>Resume</button>
          <button className="btn__reset"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }

      
     
    </div>
   
  );
}

export default Btn;