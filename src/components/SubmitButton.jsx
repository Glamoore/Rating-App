import React from 'react'

function SubmitButton({ ratingSubmit }) {
    return (
        <button className="submitBtn" onClick={ratingSubmit}>
          SUBMIT
        </button>
    );
  }

export default SubmitButton