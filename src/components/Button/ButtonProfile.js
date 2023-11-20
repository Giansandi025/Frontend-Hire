import React from "react";
import { Link } from "react-router-dom";
import Assets from "../../assets/img";
const ButtonProfile = () => {
  const role = localStorage.getItem("role");
  return (
    <div>
      {role === "company" ? (
        <Link to="/profilePerekrut">
          <img
            src={Assets.card1}
            alt=""
            style={{ borderRadius: "50%", height: "40px", width: "40px" }}
          />
        </Link>
      ) : (
        <Link to="/profilePekerja">
          <img
            src={Assets.card1}
            alt=""
            style={{ borderRadius: "50%", height: "40px", width: "40px" }}
          />
        </Link>
      )}
    </div>
  );
};
export default ButtonProfile;
