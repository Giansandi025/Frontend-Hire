import React from "react";
import { Link } from "react-router-dom";
import Assets from "../../assets/img";
import ButtonHome from "../Button/ButtonHome";
import ButtonProfile from "../Button/ButtonProfile";

function NavbarLandingAfterLogin() {
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("id");
  console.log(id);
  return (
    <nav className="px-5 mb-3 pt-3" style={{ backgroundColor: "white" }}>
      <div className="">
        <div className="row align-items-center">
          <div className="col-1">
            <Link to="/landingPage">
              <img
                src={Assets.logo}
                alt=""
                style={{ width: "127px", height: "35px" }}
              />
            </Link>
          </div>
          <div className="col-sm-2 col-lg-1 offset-sm-3 offset-lg-1">
            {role === "company" ? (
              <ButtonHome />
            ) : (
              <button className="btn" style={{ visibility: "hidden" }}></button>
            )}
          </div>
          <div className="col-lg-1 offset-5">
            <img src={Assets.bell} alt="" style={{ marginLeft: "110px" }} />
          </div>
          <div className="col-lg-1">
            <Link to={`/chat/${id}`}>
              <img src={Assets.mail} alt="" style={{ marginLeft: "60px" }} />
            </Link>
          </div>
          <div className="col-lg-1 col-sm-1">
            <ButtonProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavbarLandingAfterLogin;
