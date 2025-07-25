import React from 'react';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-img">
        <img src="/profileimage.jpg" alt="Profile" className="profile-picture" />
      </div>
      <div className="data">
      <h2>Your Profile</h2>
      <p>Name: Ravi Kumar</p>
      <p>Student ID: N01719809</p>      
      <p>Email: Rkalia95@gmail.com</p>
      <p>Course: Programming-2</p>
      <p>College: Humber College</p>
      <p>Program: Web Design and Development</p>
      <p>GitHub: <a href="https://github.com/ravikalia-01/Programming2-Project2.git" target="_blank" rel="noopener noreferrer">https://github.com/ravikalia-01/Programming2-Project2.git</a></p>
      {/* Add more user details */}
      </div>
    </div>
  );
};

export default ProfilePage;
