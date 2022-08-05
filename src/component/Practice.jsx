import React, { useState } from "react";

const Practice = () => {
  const [changeValue, setchangeValue] = useState(false);
  const [inputValueFisrt, setinputValueFisrt] = useState();
  const [inputValuSecond, setinputValuSecond] = useState();
  const [showInputValue, setshowInputValue] = useState([]);
  const showValue = () => {
    let DataValue = [];
    DataValue = showInputValue.push(inputValueFisrt, inputValuSecond);
    console.log(showInputValue, "showInputValue");
  };
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
              <p className={`${changeValue ? "text-info" : "text-success"}`}>
                {`${changeValue ? "Anjali" : "Chanda"}`}
              </p>
              <button
                className="btn_change px-3 py-1"
                onClick={() => setchangeValue(!changeValue)}
              >
                ClickText
              </button>
            </div>
            <div className="col-6 mt-5">
              <div>
                <input
                  onChange={(e) => setinputValueFisrt(e.target.value)}
                  className="py-2 w-100"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mt-4">
                <input
                  onChange={(e) => setinputValuSecond(e.target.value)}
                  className="py-2 w-100"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={() => showValue()}
                  className="btn_change px-3 py-1"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Practice;
