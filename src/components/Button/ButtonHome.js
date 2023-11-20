import React from "react";
import { Link } from "react-router-dom";
const ButtonHome = () => {
  return (
    <div>
      <Link to={`/homev1`}>
        <button
          className="btn  myfont3"
          style={{ width: "80px", height: "40px" }}
        >
          <p className="myfont4">Home</p>
        </button>
      </Link>
    </div>
  );
};
export default ButtonHome;
