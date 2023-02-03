import ReviewItem from "./ReviewItem";
import PropTypes from 'prop-types';
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
    review: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            Text: PropTypes.string,
            rating: PropTypes.number,
        })
    ),
};

export default ReviewList
