import React, { useEffect } from "react";
import { useState } from "react";

const ColorAnnimation = () => {
  const [count, setCount] = useState(0);
  const Data = [
    {
      text: "Build your brand",
      name: "developText",
    },
    {
      text: "with a strong digital",
      name: "previewText",
    },
    {
      text: "digital presence",
      name: "shipText",
    },
  ];
  const DataHandler = () => {
    for (var i = 0; i <= Data.length; i++) {
      if (count >= 2) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }
    console.log("count", count);
  };
  useEffect(() => {
    setTimeout(() => {
      DataHandler();
    }, 3000);
  }, [count]);
  return (
    <div className="text-center">
      {Data &&
        Data.map((val, index) => {
          return (
            <div key={index}>
              <h1 className={`${index === count ? `${val.name} ` : ""}`}>
                {val.text}
              </h1>
            </div>
          );
        })}
    </div>
  );
};

export default ColorAnnimation;
