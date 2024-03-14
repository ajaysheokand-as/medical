import React from 'react';

function UserProfileDialog({ userData, handleClose }) {
  return (
    <div className="dialog">
      <div className="dialog-content">
        <h2>User Profile</h2>
        {userData ? (
          <div>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            {/* Add other user data fields here */}
          </div>
        ) : (
          <p>No user data available</p>
        )}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default UserProfileDialog;
