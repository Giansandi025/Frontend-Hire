/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Assets from "../../assets/img";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const FormExperience = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");
  const [position, setPosition] = useState("");
  const [work_start, setWorkStart] = useState("");
  const [work_end, setWorkEnd] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  console.log("ini token", token);
  const navigate = useNavigate();

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData = "https://hireapp-be-production-e91c.up.railway.app/experience";
  useEffect(() => {
    axios
      .get(getData, user)
      .then((res) => {
        console.log("Get experiences success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("Get experiences fail");
        console.log(err);
      });
  }, []);
  const handleData = async (e) => {
    e.preventDefault();
    let form = {
      position: position,
      work_start: work_start,
      work_end: work_end,
      company_name: company_name,
      description: description,
    };
    // const formData = new FormData();
    // formData.append("position", postData.position);
    // formData.append("work_start", postData.work_start);
    // formData.append("work_end", postData.work_end);
    // formData.append("company_name", postData.company_name);
    // formData.append("description", postData.description);
    // console.log(formData);
    axios
      .post(
        `https://hireapp-be-production-e91c.up.railway.app/experience`,
        form,
        user
      )
      .then((res) => {
        console.log("Post experience success");
        console.log(res);
        Swal.fire("Success", "Post experience success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Post experience failed");
        console.log(err);
        Swal.fire("Warning", "Post experience failed", "error");
      });
  };
  const DeleteExperiences = (id) => {
    axios
      .delete(
        `https://hireapp-be-production-e91c.up.railway.app/experience/${id}`,
        user
      )
      .then((res) => {
        console.log("Delete experience success");
        console.log(res);
        Swal.fire("Success", "Delete experience success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delete experience failed");
        console.log(err);
        Swal.fire("Warning", "Delete experience failed", "error");
      });
  };
  return (
    <div>
      <div className="container text-start shadow rounded-2 mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Pengalaman kerja</h3>
          </div>
          <hr />
        </div>
        <div className="row mt-4">
          {data ? (
            data.map((item) => (
              <div>
                <div className="col-1">
                  <img
                    src={Assets.pijar}
                    alt=""
                    style={{ height: "98px", width: "90px" }}
                  />
                </div>
                <div
                  key={item.id}
                  className="col-9 offset-1"
                  style={{ marginLeft: "100px", marginTop: "-80px" }}
                >
                  <h5 className="myfont">{item?.position}</h5>
                  <h6 className="myfont3">{item?.company_name}</h6>
                  <h6 className="myfont3 color-font">
                    {item?.work_start}-{item?.work_end}
                  </h6>
                  <h6 className="myfont2 mb-4">{item?.description}</h6>
                  <button
                    className="btn"
                    style={{
                      width: "90px",
                      height: "40px",
                      backgroundColor: "#FBB017",
                      color: "white",
                    }}
                    key={item.id}
                    onClick={() => navigate(`/edit-experiences/${item.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn"
                    style={{
                      width: "90px",
                      height: "40px",
                      backgroundColor: "red",
                      color: "white",
                      marginLeft: "20px",
                    }}
                    key={item.id}
                    onClick={() => DeleteExperiences(item.id)}
                  >
                    Hapus
                  </button>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <h1>...Loading</h1>
          )}
        </div>
        <Form>
          <div className="row">
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Posisi</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="web developer"
                  name="position"
                  onChange={(e) => setPosition(e.target.value)}
                  className="myfont3"
                />
              </Form.Group>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Bulan/tahun masuk</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Januari 2018"
                    className="myfont3"
                    name="work_start"
                    onChange={(e) => setWorkStart(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Bulan/tahun keluar</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Januari 2018"
                    className="myfont3"
                    name="work_end"
                    onChange={(e) => setWorkEnd(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Nama perusahaan</h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="PT Harus bisa"
                    className="myfont3"
                    name="company_name"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Deskripsi singkat</h6>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Deskripsikan pekerjaan anda"
                  className="myfont3"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <hr />

              <div className="col-lg-12 align-items-center mb-5">
                <button
                  className="btn"
                  id="btn-yellw"
                  type="submit"
                  onClick={(e) => handleData(e)}
                  style={{
                    width: "680px",
                    marginLeft: "26px",
                  }}
                >
                  Tambah pengalaman kerja
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default FormExperience;
