import React, { useState } from "react";
import { EyeClose, EyeIcon } from "../common/Icons";
import swal from "sweetalert";

function FormTwo() {
  const InitialValue = {
    FirstName: "",
    LastName: "",
    email: "",
    Password: "",
  };
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [FirstValue, setFirstValue] = useState(InitialValue);
  const [formErrors, setFormErrors] = useState(false);
  const [existValue, setExistValue] = useState(false);
  const [existValueTwo, setExistValueTwo] = useState(false);
  const hanldeUser = (e) => {
    const value = e.target.value;
    setFirstValue({
      ...FirstValue,
      FirstName: value,
    });
    if (value.includes("_") && FirstValue.FirstName !== "") {
      setExistValue(true);
    } else {
      setExistValue(false);
    }
  };
  const lastvalue = (e) => {
    const value = e.target.value;
    setFirstValue({
      ...FirstValue,
      LastName: value,
    });
    if (value.includes("-") && FirstValue.LastName !== "") {
      setExistValueTwo(true);
    } else {
      setExistValueTwo(false);
    }
  };
  const submitBtn = (e) => {
    console.log(FirstValue, "FirstValue");
    e.preventDefault(e);
    const ValidateValue = ValidateEmail(FirstValue.email);
    setFirstValue(FirstValue);
    if (
      FirstValue.FirstName &&
      FirstValue.LastName &&
      FirstValue.Password &&
      FirstValue.email === "" &&
      ValidateValue
    ) {
      swal("Done", "SuccessFully is Done ", "success");
      setFormErrors(false);
      setFirstValue({
        FirstName: "",
        LastName: "",
        email: "",
        Password: "",
      });
    } else {
      setFirstValue(FirstValue);
      swal("Oops", "Something went wrong!", "error");
    }
  };

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    // alert("You have entered an invalid email address!");
    return false;
  }

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
                    // onChange={(e) =>
                    //   setFirstValue({
                    //     ...FirstValue,
                    //     FirstName: e.target.value,
                    //   })
                    // }
                    onChange={(e) => hanldeUser(e)}
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                  {formErrors && FirstValue.FirstName === "" ? (
                    <p className="text-danger mb-0">Username is required</p>
                  ) : FirstValue !== "" && existValue ? (
                    <p className="text-success mb-0">Username Is exist</p>
                  ) : FirstValue.FirstName === "" ? (
                    ""
                  ) : (
                    <p className="text-danger mb-0">
                      Username Is Does n't exist
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    value={FirstValue.LastName}
                    // onChange={(e) =>
                    //   setFirstValue({
                    //     ...FirstValue,
                    //     LastName: e.target.value,
                    //   })
                    // }
                    onChange={(e) => lastvalue(e)}
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                  {formErrors && FirstValue.LastName === "" ? (
                    <p className="text-danger mb-0">Username is required</p>
                  ) : FirstValue !== "" && existValueTwo ? (
                    <p className="text-success mb-0">Username Is exist</p>
                  ) : FirstValue.LastName === "" ? (
                    ""
                  ) : (
                    <p className="text-danger mb-0">
                      Username Is Does n't exist
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    value={FirstValue.email}
                    onChange={(e) =>
                      setFirstValue({
                        ...FirstValue,
                        email: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control"
                    placeholder="email"
                  />
                  <p className="text-danger mb-0">
                    {formErrors && FirstValue.email === ""
                      ? "Email is required"
                      : ""}
                  </p>
                </div>
                <div className="mb-3 d-flex position-relative">
                  <div>
                    <input
                      value={FirstValue.Password}
                      onChange={(e) =>
                        setFirstValue({
                          ...FirstValue,
                          Password: e.target.value,
                        })
                      }
                      type={showHidePassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Password"
                    />
                    <p className="text-danger mb-0">
                      {formErrors && FirstValue.Password === ""
                        ? "Password is required"
                        : ""}
                    </p>
                  </div>
                  <div
                    className="position-absolute eye_position cursor"
                    onClick={() => setShowHidePassword(!showHidePassword)}
                  >
                    {showHidePassword ? <EyeIcon /> : <EyeClose />}
                  </div>
                </div>
                {console.log(FirstValue)}
                <div className="text-center mt-4">
                  <button
                    onClick={(e) => submitBtn(e)}
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
