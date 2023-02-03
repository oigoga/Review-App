import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import {useState} from 'react';
import reviewData from "./components/data/ReviewData";
import ReviewStats from "./components/ReviewStats";
import ReviewForm from "./components/ReviewForm";
function App() {

 const deleteReview = (id) => {
  if (window.confirm('Are you sure you want to delete this?')){
    setReview(review.filter((item) => item.id !== id))
  }
 }
  const [review, setReview] = useState(reviewData)
  return (
    <div className="container">
      <Header />
      <ReviewForm/>
      <ReviewStats review={ review}/>
      <ReviewList review={review} revDelete={deleteReview} />

    </div>
  );
}
export default App;
