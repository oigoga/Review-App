import { FaTimes } from "react-icons/fa";
import Card from "./Card";
import PropTypes from 'prop-types';



function ReviewItem({item, revDelete}) {
 

  return (
    <>
      <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => revDelete(item.id)} className="close">
        <FaTimes />
      </button>
      <p>{item.text}</p>
      
    </Card>
    </>
  );
}
ReviewItem.PropTypes = {
  item: PropTypes.object,
}
export default ReviewItem;
