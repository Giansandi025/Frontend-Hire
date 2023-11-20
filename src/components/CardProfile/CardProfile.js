import React, { useState, useEffect } from "react";
// import ModalEdit from "../Modal/ModalEdit";
import ModalEdit from "../Modal/ModalProfilePerekrut";
import Assets from "../../assets/img";
import { useSelector } from "react-redux";
import Axios from "axios";

const CardProfile = () => {
  const [data, setData] = useState("");
  const token = useSelector((state) => state.data);
  const [inputData, setInputData] = useState({
    name: "",
    jobdesc: "",
    domisili: "",
    tempatKerja: "",
    desc: "",
  });
  const client = Axios.create({
    baseURL: `https://rich-gold-gorilla-wear.cyclic.app/register/detailpekerja/${token} `,
  });
  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await client.get(" ");
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);
  return (
    <div className=" text-start">
      <section className="section">
        <div className="card" style={{ marginLeft: "100px" }}>
          <div className="card-content">
            <div className="image">
              <img src={Assets.card1} alt="" />
            </div>
            <div className="name">
              <ModalEdit />
              {data
                ? data.map((item) => (
                    <>
                      <h4 className="myfont4 mt-3">{item.name}</h4>
                      <h6 className="myfont3">{item.deskripsi}</h6>
                      <div className="row">
                        <div className="col-lg-1">
                          <img src={Assets.map} alt="" />
                        </div>
                        <div className="col-lg-10">
                          <p className="myfont3 color-font">{item.domisili}</p>
                        </div>
                      </div>
                      <p className="myfont3 color-font">{item.tempat_kerja}</p>
                    </>
                  ))
                : "DATA NOT FOUND"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CardProfile;
