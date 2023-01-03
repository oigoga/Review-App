import ReviewItem from "./ReviewItem"
function ReviewList({review}) {
    if (!review || review.length === 0){
        return <p>No review Yet</p>}
  return (
   <>
   {review.map((item) =>(
            <ReviewItem key={item.id} item={item} />
        ))}
   </>
  )
}

export default ReviewList
