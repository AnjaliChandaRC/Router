import React, { useState } from "react";
import { starData } from "../content/content";
const Star = () => {
  const [indexvaluefirst, SetIndexValuefirst] = useState(null);
  const [indexvaluesec, SetIndexValuesec] = useState(null);
  const [indexvaluethird, SetIndexValuethird] = useState(null);
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Star</h1>
        <div className="row justify-content-between mt-5">
          {starData.map((val, index) => {
            return (
              <div className="col-2" key={index}>
                <div
                  onClick={() => SetIndexValuefirst(index)}
                  className={indexvaluefirst >= index ? "orange" : "redclr"}
                >
                  {val.imageUrl}
                </div>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-between mt-5">
          {starData.map((val, index) => {
            return (
              <div className="col-2" key={index}>
                <div
                  onClick={() => SetIndexValuesec(index)}
                  className={indexvaluesec >= index ? "orange" : "redclr"}
                >
                  {val.imageUrl}
                </div>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-between mt-5">
          {starData.map((val, index) => {
            return (
              <div className="col-2" key={index}>
                <div
                  onClick={() => SetIndexValuethird(index)}
                  className={indexvaluethird >= index ? "orange" : "redclr"}
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
