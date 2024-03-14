// components/Home.js
import React from "react";
import PatientInfo from "./PatientInfo";
import Medi from "./Medi";
import Test from "./Test";
import Navbar from "./Navbar";

function Home({ handleLogout, user }) {
  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="m-3 flex flex-row justify-around h-screen">
        <div className="flex flex-column print-d-none">
          <PatientInfo />
          <Test />
        </div>
        <Medi />
      </div>
    </>
  );
}

export default Home;