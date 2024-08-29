import React, { useState } from "react";

function DropListCities(props) {
  const [dropList, setDropList] = useState([...props.listOfCities]);

  const change = (e) => {
    props.setValueOfCities(e.target.value);
    props.setIndex(e.target.selectedIndex)
  };


  return (
    <div className="flex w-full">
      <img src={"/assets/location.svg"} alt="" className="pr-2" />
      <select name="" id="" className="bg-inherit text-black" onChange={change}>
        {dropList.map((element, index) => {
          return (
            <option key={index} value={element.value} className="text-black">
              {element.city}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropListCities;


