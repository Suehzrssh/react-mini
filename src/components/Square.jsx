import React from 'react';
import "../App.css";

const Square = ({value, onSqrClick}) => {
  return (
    <div className='squares'>
        <button
        onClick={onSqrClick}
         className="sqrBtn">{value}</button>
    </div>
  )
}

export default Square;