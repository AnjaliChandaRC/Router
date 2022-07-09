import React, { useState } from "react";
import { EyeClose, EyeIcon } from "../common/Icons";
import NatureImg from "../assets/image/nature.jpg";
function Form() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [emailName, setemailName] = useState();
  const [passwordName, setpasswordName] = useState();
  const [confirmpassowrdName, setconfirmpasswordName] = useState();
  const [showData, setShowData] = useState([]);
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [showHidePasswordtwo, setShowHidePasswordtwo] = useState(false);
  const [uploadImg, setUploadImg] = useState();

  //   const changeHandler = (e) => {
  //     setfirstName(e);
  //   };
  const uploadImageHandler = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setUploadImg(image);
  };
  const uploadImageHandlerSecond = (e) => {
    const Images = e.target.files;
    console.log("Images ", Images);
  };
  const submitData = () => {
    let Data = [];
    // const ValidateValue = ValidateEmail(emailName);
    Data = showData.push(
      firstName,
      lastName,
      emailName,
      passwordName,
      confirmpassowrdName
    );
    console.log("showData", showData);
  };

  // function ValidateEmail(mail) {
  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
  //     return true;
  //   }
  //   // alert("You have entered an invalid email address!");
  //   return false;
  // }

  return (
    <>
      <section className="d-flex min-vh-100 align-items-center justify-content-center">
        <div className="container d-flex justify-content-center align-items-center ">
          <div className="row">
            <div className="col">
              <div className="form_border">
                <div class="mb-3">
                  <input
                    onChange={(e) => setfirstName(e.target.value)}
                    // onChange={(e) => changeHandler(e)}
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setlastName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setemailName(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3 d-flex position-relative">
                  <div>
                    <input
                      onChange={(e) => setpasswordName(e.target.value)}
                      type={showHidePasswordtwo ? "text" : "password"}
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div
                    className="position-absolute eye_position cursor"
                    onClick={() => setShowHidePasswordtwo(!showHidePasswordtwo)}
                  >
                    {showHidePasswordtwo ? <EyeIcon /> : <EyeClose />}
                  </div>
                </div>
                <div className="mb-3 d-flex position-relative">
                  <div className="">
                    <input
                      onChange={(e) => setconfirmpasswordName(e.target.value)}
                      type={showHidePassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div
                    className="position-absolute eye_position cursor"
                    onClick={() => setShowHidePassword(!showHidePassword)}
                  >
                    {showHidePassword ? <EyeIcon /> : <EyeClose />}
                  </div>
                  {/* <div className="position-absolute eye_position">
                    <EyeClose />
                  </div> */}
                </div>
                <div className="text-center mt-4">
                  <button
                    className="fs-4 fw-bold submit_btn py-1 px-3"
                    onClick={() => submitData()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <input
            onChange={(e) => uploadImageHandler(e)}
            type="file"
            id="my_file"
            hidden
          />
          <label htmlFor="my_file">
            <img
              className="w-25"
              src={uploadImg ? uploadImg : NatureImg}
              alt=""
            />
          </label>
        </div>
      </section>
    </>
  );
}

export default Form;
