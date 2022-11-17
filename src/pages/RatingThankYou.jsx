import React, {useContext} from "react";

//Styles
import "./../style.css";

//Components
import ThankYouImage from "./../images/illustration-thank-you.svg";


//Context
import { RatingContext } from "../context/rating.context";

function RatingThankYou() {
  const { rating } = useContext(RatingContext);

  return (
      <div className="thePage">
        <div className="appContainer thankYouAppContainer">
          <div className="contentContainer">
            <div className="imageContainer">
              <img src={ThankYouImage} className="thankYouImage" alt="Phone" />
            </div>
            <div className="confirmationContainer">
              <p className="confirmationText">You selected {rating} out of 5</p>
            </div>
            <h1 className="thanksHeading">Thank You!</h1>
            </div>
            <p className="thanksText">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>
      </div>
  );
}

export default RatingThankYou;