import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Portofolio = () => {
  const [data, setData] = useState(null);
  const id = localStorage.getItem("Id");
  let users = `${process.env.REACT_APP_URL_ROUTE}/portofolio/${id}`;
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
    <div>
      <div className="row mt-2">
        {data ? (
          data.map((item) => (
            <div className="col-4">
              <img src={item.image} alt="" style={{ width: "100px" }} />
              <h6 className="myfont3 mt-2" style={{ marginLeft: "10px" }}>
                {item.name}
              </h6>
            </div>
          ))
        ) : (
          <h1>...Loading</h1>
        )}
      </div>
    </div>
  );
};
export default Portofolio;
