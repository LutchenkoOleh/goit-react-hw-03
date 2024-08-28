import "./SearchBox.css"
import { useState } from "react";

export default function SearchBox() {

  // const [inputValue, setInputValue] = useState("");

  // const handleChange = (evt) => {
  //   setInputValue(evt.target.value);
  // };


  // return (
  //   <div>
  //     <label htmlFor="">
  //       Find contacts by name
  //       <input type="text" />
  //     </label>

  //   </div>
  // )

  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );

}