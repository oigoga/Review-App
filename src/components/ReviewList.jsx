import ReviewItem from "./ReviewItem"
import propTypes from 'prop-types'
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

ReviewList.PropTypes = {
    review: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            Text: propTypes.string,
            rating: propTypes.number,
        })
    ),
};

export default ReviewList
