import React, { useState } from "react";

function CurrentWeather(props) {
  const [degCities, setDegCities] = useState([...props.listOfCities]);

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={degCities[props.index].img} alt="weathers" />

      <h1 className="font-smbold text-[68px] text-black">{degCities[props.index].degree}&#8451;</h1>
      <p className="text-center text-black font-smbold text-[22px]">{props.valueOfCities}</p>
    </div>
  );
}

export default CurrentWeather;
