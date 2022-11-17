import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Styles
import "./../style.css";

//Components
import StarIcon from "./../images/icon-star.svg";
import NumberSelector from "../components/NumberSelector";
import SubmitButton from "../components/SubmitButton";

//Context
import { RatingContext } from "../context/rating.context";

function RatingApp() {
  const [tempRating, setTempRating] = useState(1);

  const navigate = useNavigate();

  const { setRating } = useContext(RatingContext);

  const ratingHandler = (n) => setTempRating(n);

  const handleSubmit = () => {
    setRating(tempRating);
    navigate("/ThankYou");
  };

  return (
    <div className="thePage">
      <div className="appContainer">
      <div className="contentContainer">
          <div className="starContainer">
            <img src={StarIcon} className="starIcon" alt="Star Icon " />
          </div>
          <h1 className="ratingHeading">How did we do?</h1>
          <div className="ratingTextContainer">
          <p className="ratingText">
            Please let us know how we did with your support request. All feedback is
            appreciated to help us improve our offering!
          </p>
          </div>
          <div className="numberBar">
            <NumberSelector handler={ratingHandler} number={1} />
            <NumberSelector handler={ratingHandler} number={2} />
            <NumberSelector handler={ratingHandler} number={3} />
            <NumberSelector handler={ratingHandler} number={4} />
            <NumberSelector handler={ratingHandler} number={5} />
          </div>
          <div className="btnContainer">
          <SubmitButton ratingSubmit={handleSubmit} />
          </div>
      </div>
      </div>
    </div>
  );
}

export default RatingApp;
