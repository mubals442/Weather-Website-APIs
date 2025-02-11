import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function CurrentWeather(props) {
  const [degCities, setDegCities] = useState([...props.listOfCities]);
  const [update, setUpdate] = useState(false);


  return (
    <div className="flex flex-col justify-center items-center">
      <AnimatePresence>
        <motion.img
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          exit={{ y: 0, x: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          src={degCities[props.index].img}
          alt="weathers"
        />
      </AnimatePresence>
      <AnimatePresence>
        <motion.h1
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          exit={{ y: 0, x: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          className="font-smbold text-[68px] text-black"
        >
          {degCities[props.index].degree}&#8451;
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence>
        <motion.p
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          exit={{ y: 0, x: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-black font-smbold text-[22px]"
        >
          {props.valueOfCities}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default CurrentWeather;
