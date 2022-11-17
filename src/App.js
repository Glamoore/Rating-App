import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Context
import { RatingProvider } from "./context/rating.context";

//Styles
import "./App.css";

//Pages
import RatingApp from "../src/pages/RatingApp";
import RatingThankYou from "./pages/RatingThankYou";

function App() {
  return (
    <Router>
      <RatingProvider>
        <Routes>
          <Route path="/" element={<RatingApp />} />
          <Route path="ThankYou" element={<RatingThankYou />} />
        </Routes>
      </RatingProvider>
    </Router>
  );
}

export default App;
