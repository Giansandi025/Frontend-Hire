/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const FormPortofolio = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");
  const [photo, setPhoto] = useState("");
  console.log("ini token", token);
  const navigate = useNavigate();

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData =
    "https://hireapp-be-production-e91c.up.railway.app/portofolio/get";
  useEffect(() => {
    axios
      .get(getData, user)
      .then((res) => {
        console.log("Get portofolio success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("Get portofolio fail");
        console.log(err);
      });
  }, []);
  const [postData, setPostData] = useState({
    name: data?.name,
    repo: data?.repo,
    type: data?.type,
  });
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleData = async (e) => {
    e.preventDefault();
    // let form = {
    //   name: name,
    //   repo: repo,
    //   type: type,
    // };
    const formData = new FormData();
    formData.append("name", postData.name);
    formData.append("repo", postData.repo);
    formData.append("type", postData.type);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .post(
        `https://hireapp-be-production-e91c.up.railway.app/portofolio/add`,
        formData,
        user,
        {
          "content-type": "multipart/form-data",
        }
      )
      .then((res) => {
        console.log("Post portofolio success");
        console.log(res);
        Swal.fire("Success", "Post portofolio success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Post portofolio failed");
        console.log(err);
        Swal.fire("Warning", "Post portofolio failed", "error");
      });
  };
  const DeletePortofolio = (id) => {
    axios
      .delete(
        `https://hireapp-be-production-e91c.up.railway.app/portofolio/delete/${id}`,
        user
      )
      .then((res) => {
        console.log("Delete portofolio success");
        console.log(res);
        Swal.fire("Success", "Delete portofolio success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delete portofolio failed");
        console.log(err);
        Swal.fire("Warning", "Delete portofolio failed", "error");
      });
  };
  return (
    <div>
      <div
        className="container text-start shadow rounded-2 mt-1"
        style={{ marginBottom: "100px" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Portofolio</h3>
          </div>
          <hr />
        </div>
        <div className="row mt-4">
          {data ? (
            data.map((item) => (
              <div>
                <div className="col-1">
                  <img
                    src={item?.photo}
                    alt=""
                    style={{ height: "98px", width: "90px" }}
                  />
                </div>
                <div
                  key={item.id}
                  className="col-9 offset-1"
                  style={{ marginLeft: "100px", marginTop: "-80px" }}
                >
                  <h5 className="myfont">{item?.name}</h5>
                  <h6 className="myfont3">{item?.repo}</h6>
                  <h6 className="myfont3 color-font mb-4">{item?.type}</h6>
                  <button
                    className="btn"
                    style={{
                      width: "90px",
                      height: "40px",
                      backgroundColor: "#FBB017",
                      color: "white",
                    }}
                    key={item.id}
                    onClick={() => navigate(`/edit-portofolio/${item.id}`)}
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
                    onClick={() => DeletePortofolio(item.id)}
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
                  <h6 className="myfont3 color-font">Nama aplikasi</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan nama aplikasi"
                  className="myfont3"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={postData.name}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Link repository</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan link repository"
                  className="myfont3"
                  name="repo"
                  onChange={(e) => handleChange(e)}
                  value={postData.repo}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Type portofolio</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan type aplikasi"
                  className="myfont3"
                  name="type"
                  onChange={(e) => handleChange(e)}
                  value={postData.type}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h6 className="myfont3 color-font">Upload gambar</h6>
              </Form.Label>
              <div className="row">
                <div className="col-lg-12">
                  <Form.Control
                    type="file"
                    placeholder="Masukan type aplikasi"
                    className="myfont3"
                    name="photo"
                    onChange={handlePhotoChange}
                  />
                </div>
              </div>
            </Form.Group>
            <hr className="mt-1" />
            <div className="col-lg-12 align-items-center mb-5 mt-1">
              <button
                className="btn "
                id="btn-yellw"
                type="submit"
                onClick={(e) => handleData(e)}
                style={{
                  width: "680px",
                  marginLeft: "26px",
                }}
              >
                <h6 className="myfont" style={{ marginTop: "8px" }}>
                  Tambah portofolio
                </h6>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default FormPortofolio;
