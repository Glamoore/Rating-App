import React from 'react'


// NUMBER SELECTOR CREATOR

function NumberSelector({ handler, number }) {
    return (
      <button className="numberSelector" onClick={() => handler(number)}>
        {number}
      </button>
    );
  }

export default NumberSelector