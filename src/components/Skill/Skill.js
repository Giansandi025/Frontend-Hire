/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
const Skill = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("Token");
  console.log("ini token", token);

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData = "https://hireapp-be-production-e91c.up.railway.app/skill/get";
  useEffect(() => {
    axios
      .get(getData, user)
      .then((res) => {
        console.log("Get skill success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("Get skill fail");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="row mt-2">
        {data ? (
          data.map((item) => (
            <div className="col-5 ">
              <div className="card-1 mt-3">
                <div
                  className="btn"
                  style={{ backgroundColor: "#FBB017", color: "white" }}
                >
                  {item.skill}
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>...Loading</h1>
        )}
      </div>
    </div>
  );
};
export default Skill;
