import React from "react";
import { Link } from "react-router-dom";
import Assets from "../assets/img";

export default function navbarHome() {
  return (
    <div>
      <nav className="px-5 mb-5 navbar navbar-light bg-light d-flex justify-content-between">
        <div className="d-flex justify-content-around">
          <Link className="navbar-brand" to="">
            <img
              src={Assets.logo}
              width="100"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
        </div>

        <div className="d-flex justify-content-around">
          <Link to="#" className="px-2">
            <img src={Assets.bell} alt="" />
          </Link>
          <Link to="#" className="px-2">
            <img src={Assets.mail} alt="" />
          </Link>
          <div className="px-2">
            <Link
              className="d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              aria-expanded="true"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="30"
                loading="lazy"
                alt=""
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
