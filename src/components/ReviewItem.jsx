import { useState } from "react";

function ReviewItem() {
  const [rating, setRating] = useState(6);
  const [text, setText] = useState("This is review text mm");

 const btnChanged= () => {
     setRating = () => {
        return 16
    }
  }

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={btnChanged}>Submit</button>
    </div>
  );
}

export default ReviewItem;
