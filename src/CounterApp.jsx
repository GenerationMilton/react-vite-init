import PropTypes from "prop-types";
import { useState } from "react";

//Event click
// const handleAdd= (event)=>{
//     console.log(event)
// }

export const CounterApp = ({value}) => {

    const [ counter, setCounter] =useState(value);
    //hooks
    const handleAdd= ()=>{
        // setCounter(counter +1);
        setCounter((c)=>c+1);
    }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={ handleAdd}>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}
