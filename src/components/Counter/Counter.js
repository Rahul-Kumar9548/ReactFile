import React, { useState } from 'react'
import classes from './Counter.module.css'

const counter = () => {
    // let counter = 1;
    let initvalCounter = 0;
    const [counter, setCounter] = useState(initvalCounter);



      function increasingCounter() {
        // counter++;
        if(counter < 5) {
          setCounter(counter + 1);
          console.log("Increasing Counter Value", counter);
         }
        
      }

      function decreaseCounter() {
        // counter--;
        if(counter > 0) {
          setCounter(counter - 1);
          console.log("decreasing Counter Value", counter);
          }
        
      }

  return (
    <div className={classes['counter']}>
        <button onClick={decreaseCounter}>-</button>
        <span>Counter value: {counter}</span>
        <button onClick={increasingCounter}>+</button>
    </div>
  )
}

export default counter