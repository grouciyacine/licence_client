import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";
import Navbar from "../../components/navbar/Navbar";
function Csv() {
  const user = useSelector((state) => state.user);
  const [file, setFile] = useState([]);
  const handleClick = () => {
    const a = { data: [file] };
    axios
      .post("http://127.0.0.1:8000/excel", JSON.stringify(a))
      .then(alert("Excel Added With Success"))
      .catch((err) => console.log(err));
  };
  const handleClickNPK = () => {
    const a = { data: [file] };
    axios
      .post("http://127.0.0.1:8000/npk", JSON.stringify(a))
      .then(alert("Excel Added With Success"))
      .catch((err) => console.log(err));
  };
  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryData = event.target.result;
      const workbook = XLSX.read(binaryData, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      // or set the state with the data to render in the UI
      setFile(data);
    };
    reader.readAsBinaryString(file);
  }

  return (
    <>
      <Navbar />
      <div className="container1">
        <h1>Hi {user?.name}, Enter Your Radiance data</h1>
        <div className="formular">
          <div className="total">
            <div className="forma1" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <h4 >Select Excel File:</h4>
              <input
                type="file"
                id="file"
                style={{ display: "none"}}
                onChange={handleFileUpload}
              />
              <label htmlFor="file">
                <h4 className="img">Select a File</h4>
              </label>
            </div>
          </div>
        </div>
        <div></div>
        <button className="button1" onClick={handleClick}>
          Submit
        </button>
        <br />
        <h1>OR NPK</h1>
        <div className="formular">
          <div className="total">
            <div className="forma1" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <h4 >Select Excel File:</h4>
              <input
                type="file"
                id="file"
                style={{ display: "none"}}
                onChange={handleFileUpload}
              />
              <label htmlFor="file">
                <h4 className="img">Select a File</h4>
              </label>
            </div>
          </div>
        </div>
        <div></div>
        <button className="button1" onClick={handleClickNPK}>
          Submit
        </button>
        <br />
      </div>
    </>
  );
}

export default Csv;
