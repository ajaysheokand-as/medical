import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux"; // Corrected import statement
import { addReportData } from "../redux/formDataSlice";
// import Medi from "./Medi";
import Hero from "./Hero";
import PrintComponent from "./PrintComponent";
import Report from "./Report";
import Foot from "./Foot";

function DbData() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showMedi, setshowMedi] = useState(false);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUserData(response.data);
      console.log("responseData", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Log userData after updating
    console.log("userData", userData);
  }, [userData]);

  const toggleMedi = () => {
    setshowMedi(!showMedi);
  };

  const handleViewData = () => {
    fetchData();
  };

  const handleViewReport = (user) => {
    setSelectedUser(user);
    dispatch(addReportData(user.reportData));
    console.log("UserREP:", user.reportData);

    toggleMedi();
    console.log("selectedUser:", user);
  };

  return (
    <>
      <div className="d-flex justify-content-around">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user._id}>
                  <td>{user.patientinfo.firstName}</td>
                  <td>{user.patientinfo.age}</td>
                  <td>{user.patientinfo.gender}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewReport(user)}
                    >
                      View report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className=" d-flex justify-content-center">
            {showMedi && <PrintComponent user={selectedUser} />}
          </div>
          <div>{showMedi && <Hero user={selectedUser} />}</div>
          <div>{showMedi && <Report user={selectedUser} />}</div>
          <div>{showMedi && <Foot />}</div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleViewData}>
        View Data
      </button>
    </>
  );
}

export default DbData;
