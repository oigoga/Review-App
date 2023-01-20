import ReviewItem from "./ReviewItem"
import PropTypes from 'prop-types'
function ReviewList({review, revDelete}) {
    if (!review || review.length === 0){
        return <p>No review Yet</p>}
  return (
   <>
   {review.map((item) =>(
            <ReviewItem key={item.id} item={item} revDelete= {revDelete}/>
        ))}
   </>
  )
}

export default ReviewList
