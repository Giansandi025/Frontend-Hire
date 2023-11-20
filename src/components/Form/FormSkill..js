import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
const FormSkill = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");
  console.log("ini token", token);
  const [skill, setSkill] = useState("");

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [postData, setPostData] = useState({
    skill: data?.skill,
  });
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handleData = async (e) => {
    e.preventDefault();
    let form = {
      skill: skill,
    };
    axios
      .post(
        `https://hireapp-be-production-e91c.up.railway.app/skill/add`,
        form,
        user
      )
      .then((res) => {
        console.log("Post skill succes");
        console.log(res);
        Swal.fire("Success", "Post skill succes", "success");
      })
      .catch((err) => {
        console.log("Post skill failed");
        console.log(err);
        Swal.fire("Warning", "Post skill failed", "error");
      });
  };
  return (
    <div>
      <div className="container text-start shadow rounded-2 mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="myfont4 mt-4">Skill</h3>
          </div>
          <hr />
        </div>
        <form>
          <div className="row">
            <div className="col-lg-10">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Skill"
                  name="skill"
                  onChange={(e) => setSkill(e.target.value)}
                  className="myfont3"
                />
              </Form.Group>
            </div>
            <div className="col-lg-2">
              <button
                type="submit"
                onClick={(e) => handleData(e)}
                className="btn"
                style={{ backgroundColor: "#FBB017", color: "white" }}
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormSkill;
