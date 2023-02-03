import Card from "./Card";
import { useState } from "react";
import Button from "./Button";
function ReviewForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const changeText = (e) => {
        setText(e.target.value  )
    }
  return (
    <Card>
      <form>
        <h3>Kindly Leave Me a Review</h3>
        <div className="input-group">
            <input type="text" placeholder="Write me a Review" onChange={changeText} value={text} />
            <Button type="submit" >Submit</Button>
            
        </div>
      </form>
    </Card>
  );
}

export default ReviewForm;
