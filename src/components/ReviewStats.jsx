function ReviewStats({ review }) {
    let average = review.reduce((acc, cur) =>{
        return acc + cur.rating
    }, 0) / review.length
  return (
    <>
      <div className="review-stats">
        <h3>Total Review: {review.length}</h3>
        <h3>Average rating: {isNaN(average)? 0 : Math.round(average)}</h3>
      </div>
    </>
  );
}

export default ReviewStats;
