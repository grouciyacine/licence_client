import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";

function Ndvi() {
  const user = useSelector((state) => state.user);
  const [blog, SetBlog] = useState({
    NDvi: null,
    NDvi_Date: null,
    NDvi_long: null,
    NDvi_lat: null,
    NDvi_alt: null,
  });

  const handleSubmit = (e) => {
    SetBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = () => {
    if (blog) {
      axios
        .post("http://127.0.0.1:8000/posts", blog)
        .then(alert("Data Added With Success"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container1">
        <h1>Hi {user?.name}, Enter Your Data...</h1>
        <div className="formular">
          <div className="total">
            <form className="forma">
              <h3>NDVI:</h3>
              <div className="forma1">
                <h4> Date of NDVI:</h4>
                <input
                  type="datetime-local"
                  name="NDvi_Date"
                  onChange={handleSubmit}
                />
              </div>
              <div className="forma1">
                <h4> Value of NDVI:</h4>
                <input
                  type="number"
                  placeholder="Enter Value of NDVI"
                  name="NDvi"
                  onChange={handleSubmit}
                />
              </div>
              <div className="forma1">
                <h4> Longitude of NDVI:</h4>
                <input
                  type="number"
                  placeholder="Enter Longitude de NDVI"
                  name="NDvi_long"
                  onChange={handleSubmit}
                />
              </div>
              <div className="forma1">
                <h4> Altitude of NDVI:</h4>
                <input
                  type="number"
                  placeholder="Enter Altitude de NDVI"
                  name="NDvi_alt"
                  onChange={handleSubmit}
                />
              </div>
              <div className="forma1">
                <h4> Latitude of NDVI:</h4>
                <input
                  type="number"
                  placeholder="Enter Latitude de NDVI"
                  name="NDvi_lat"
                  onChange={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
        <div></div>
        <button className="button1" onClick={handleClick}>
          Submit
        </button>
        <br />
      </div>
    </>
  );
}

export default Ndvi;
