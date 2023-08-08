import React, {useState}from "react";
import "./App.css";

function Tweet({name, message}) {

    const [like, setLike] = useState(0);
    const [count, setCount] = useState(0);


   
    const increment = () => {
        // setLike(!like);
        setCount(count+1);
        setLike(like);

      };

      const decrement = () => {
        // setLike(!like);

        if(count === 0){
            return
        }
        else{
            setCount(count -1);

        }
         setLike(like);

      };

       const likeUnlike =() => {

        setLike(!like)


       }

      
  return (
    <div className="tweet">
      <h2>{name} </h2>
      <p>{message}</p>
     <button className="like" onClick={likeUnlike} > 👍 </button>
     <button className="like2" onClick={decrement} > 👍 </button>

      <h3> {count} </h3>
      <h3> {like ? 1 : 0} </h3>
 
    </div>
  );
}

export default Tweet;
