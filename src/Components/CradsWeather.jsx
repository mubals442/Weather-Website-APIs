import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import DropListCities from "./DropListCities";
import CitiesObj from "../Data/Cities";

function CradsWeather() {
  const [listOfCities, setListOfCities] = useState([...CitiesObj]);
  const [valueOfCities, setValueOfCities] = useState(listOfCities[0].city);
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col justify-between items-center shadow-2xl w-full h-screen md:w-[500px] md:h-[700px] rounded-3xl bg-white/10 p-10">
      <DropListCities
        listOfCities={[...listOfCities]}
        setValueOfCities={setValueOfCities}
        setIndex={setIndex}
      />
      <CurrentWeather
        valueOfCities={valueOfCities}
        listOfCities={[...listOfCities]}
        index={index}
      />
      <div></div>
      <div></div>
    </div>
  );
}

export default CradsWeather;
