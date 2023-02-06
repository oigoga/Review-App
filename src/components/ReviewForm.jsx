import Card from "./Card";
import { useState } from "react";
import Button from "./Button";
import Rating from "./Rating";


function ReviewForm({handleAdd}) {
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

    const formSubmit = (e) => {
      e.preventDefault()
      if(text.trim().length > 15){
        const newReview = {
           text,
          rating
        }
        handleAdd(newReview)
        setText('')
       
      }
    }

  return (
    <Card>
      <form onSubmit={formSubmit}>
        <h3>Kindly Leave Me a Review</h3>
        <Rating select={(rating) => setRating(rating)}/>
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
