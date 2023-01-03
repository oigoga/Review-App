import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import {useState} from 'react';
import reviewData from "./components/data/ReviewData";

function App() {


  const [review, setReview] = useState(reviewData)
  return (
    <div className="container">
      <Header />
      <ReviewList review={review} />
    </div>
  );
}
export default App;
