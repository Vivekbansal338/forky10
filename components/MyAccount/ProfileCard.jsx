import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  const { name, gender, phone, age, image } = props.profile;

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src="https://picsum.photos/300/150" alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>{name}</h2>
        <p>Gender : {gender}</p>
        <p>Phone : {phone}</p>
        <p>Age : {age}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
