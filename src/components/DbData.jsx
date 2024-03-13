import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addReportData } from "../redux/formDataSlice";
import Hero from "./Hero";
import PrintComponent from "./PrintComponent";
import Report from "./Report";
import Foot from "./Foot";
import { Link } from "react-router-dom"; // Import Link

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

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (selectedUser && showMedi) {
      dispatch(addReportData(selectedUser?.report.testResults));
    }
    fetchData();
  }, [selectedUser, showMedi]);

  const toggleMedi = () => {
    setshowMedi(!showMedi);
  };

  const handleViewReport = (user) => {
    setSelectedUser(user);
    dispatch(addReportData(user?.report.testResults));

    // Check if showMedi is currently false, then toggle it to true
    if (!showMedi) {
      toggleMedi();
      console.log("selectedUser:", user);
    }
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
                  <td>{user?.report?.info?.firstName}</td>
                  <td>{user?.report?.info?.age}</td>
                  <td>{user?.report?.info?.gender}</td>
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
            {showMedi && <PrintComponent />}
          </div>
          <div>{showMedi && <Hero user={selectedUser} />}</div>
          <div>{showMedi && <Report />}</div>
          <div>{showMedi && <Foot />}</div>
        </div>
      </div>
      <div className="back_btn d-flex justify-content-center">
        <Link to="/" className="btn btn-warning">
          Back
        </Link>
      </div>
    </>
  );
}

export default DbData;
