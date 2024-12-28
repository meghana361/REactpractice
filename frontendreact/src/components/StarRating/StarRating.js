import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css"
const StarRating = ({ stars }) => {
    const[rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
  // const StarRating = (props) => {
const handlerating=(index)=>{
setRating(index)
// console.log(index);

}
const handlemouseove=(index)=>{
setHover(index)
console.log(hover);

}
const handlemoveseleave=()=>{
    setHover(rating)
    // setRating(hover)
console.log("left",hover);

}
  return (
    <div style={{ margin: "10px 10px 10px 10px" }}>
      {[...Array(stars)].map((_, index) => {
        //   [...Array(props.stars)].map((_, index)=>{
        index+=1; // it gives 12345678910
        return <FaStar
        //  key={index+1} it gives from 0  1 2 3 4 56  
         key={index} 
         className={index <=(hover||rating)?"active":"inactive"}
        size={40} 
        onClick={()=>handlerating(index)}
        onMouseMove={()=>handlemouseove(index)}
        onMouseLeave={()=>handlemoveseleave()}
        
        
        />;
      })}
    </div>
  );
};

export default StarRating;
