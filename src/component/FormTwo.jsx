import React, { useState } from "react";

function FormTwo() {
  //   const InitialValue = {
  //     FirstName: "",
  //     LastName: "",
  //   };
  const [FirstValue, setFirstValue] = useState({
    FirstName: "",
    LastName: "",
  });
  const submitBtn = () => {
    setFirstValue(FirstValue);
    setFirstValue({
      FirstName: "",
      LastName: "",
    });
  };
  console.log(FirstValue, "FirstValue");
  return (
    <>
      <section className="d-flex min-vh-100 align-items-center justify-content-center">
        <div className="container d-flex justify-content-center align-items center ">
          <div className="row">
            <div className="col">
              <div className="form_border">
                <div class="mb-3">
                  <input
                    value={FirstValue.FirstName}
                    onChange={(e) =>
                      setFirstValue({
                        ...FirstValue,
                        FirstName: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={FirstValue.LastName}
                    onChange={(e) =>
                      setFirstValue({
                        ...FirstValue,
                        LastName: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                {console.log(FirstValue)}
                <div className="text-center mt-4">
                  <button
                    onClick={() => submitBtn()}
                    className="fs-4 fw-bold submit_btn py-1 px-3"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormTwo;
