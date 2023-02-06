import Card from "./Card";
import { useState } from "react";
import Button from "./Button";
function ReviewForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const changeText = (e) => {

      if(text === ''){
          setBtnDisabled(true)
          setMessage(null)
      }else if(text !== '' && text.trim().length <= 15){
        setMessage('input must exceed 15 characters')
        setBtnDisabled(true)
      }else{
        setMessage(null)
        setBtnDisabled(false)
      }
        setText(e.target.value  )
    }
  return (
    <Card>
      <form>
        <h3>Kindly Leave Me a Review</h3>
        <div className="input-group">
            <input type="text" placeholder="Write me a Review" onChange={changeText} value={text} />
            <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
            
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default ReviewForm;
