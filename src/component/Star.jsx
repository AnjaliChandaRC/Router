import React, { useState } from "react";
import { starData } from "../content/content";
const Star = () => {
  const [indexvalue, SetIndexValue] = useState(null);
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Star</h1>
        <div className="row justify-content-between mt-5">
          {starData.map((val, index) => {
            return (
              <div className="col-2" key={index}>
                <div
                  onClick={() => SetIndexValue(index)}
                  className={indexvalue === index ? "orange" : "redclr"}
                >
                  {val.imageUrl}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Star;
