/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import axios from "axios";
import ModalPhoto from "../ModalPhotoPerekrut";
import Assets from "../../assets/img";
import "./CardProfile.css";
import Skill from "../Skill/Skill";

const CardProfilePortofolio = () => {
  const [data, setData] = useState(null);
  const id = localStorage.getItem("Id");
  let users = `${process.env.REACT_APP_URL_ROUTE}/register/detailpekerja/${id}`;
  // let users = `${process.env.REACT_APP_URL_ROUTE}/register/detailpekerja/661252ac-314a-4b9d-bf60-ffaf0dd75499`;
  useEffect(() => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  return (
    <div className="container text-start">
      <section className="section">
        <div
          className="card"
          style={{ marginLeft: "100px", marginBottom: "300px" }}
        >
          <div className="card-content">
            <div className="image">
              <img src={Assets.card3} alt="" />
            </div>
            <div className="name">
              <ModalPhoto />
              <h4 className="myfont4 mt-3">
                {data ? data[0].name : "data not found"}
              </h4>
              <h6 className="myfont3">
                {data ? data[0].bidang : "data not found"}
              </h6>
              <div className="row">
                <div className="col-lg-1">
                  <img src={Assets.map} alt="" />
                </div>
                <div className="col-lg-10">
                  <p className="myfont3 color-font">
                    {data ? data[0].domisili : "data not found"}
                  </p>
                </div>
              </div>
              <p className="myfont3 color-font">
                {data ? data[0].tempat_kerja : "data not found"}
              </p>
              <p className="myfont3 color-font">
                {data ? data[0].deskripsi : "data not found"}
              </p>
              <div
                className="btn"
                style={{
                  backgroundColor: "#5E50A1",
                  color: "white",
                  width: "250px",
                }}
              >
                <h6 className="myfont4" style={{ marginTop: "3px" }}>
                  Hire
                </h6>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 ">
                <h4 className="myfont2" style={{ marginRight: "190px" }}>
                  Skill
                </h4>
              </div>
              <Skill />
              <h6 className="myfont3 color-font mt-4">
                {" "}
                <img src={Assets.mail} alt="" style={{ marginRight: "10px" }} />
                {data ? data[0].email : "data not found"}
              </h6>
              <h6 className="myfont3 color-font mt-2">
                {" "}
                <img src={Assets.ig} alt="" style={{ marginRight: "10px" }} />
                {data ? data[0].ig : "data not found"}
              </h6>
              <h6 className="myfont3 color-font mt-2">
                {" "}
                <img
                  src={Assets.github}
                  alt=""
                  style={{ marginRight: "10px" }}
                />
                {data ? data[0].linkedin : "data not found"}
              </h6>
              <h6 className="myfont3 color-font mt-2">
                {" "}
                <img src={Assets.vec} alt="" style={{ marginRight: "10px" }} />
                {data ? data[0].linkedin : "data not found"}
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CardProfilePortofolio;
