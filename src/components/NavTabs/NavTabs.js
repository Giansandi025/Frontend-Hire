/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Assets from "../../assets/img";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

function NavTabs() {
  const [data, setData] = useState(null);
  const [dataPortofolio, setDataPortofolio] = useState(null);
  const token = localStorage.getItem("Token");

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let experiences = `https://hireapp-be-production-e91c.up.railway.app/experience`;
  let portofolio = `https://hireapp-be-production-e91c.up.railway.app/portofolio/get`;
  useEffect(() => {
    axios
      .get(experiences, user)
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

  useEffect(() => {
    axios
      .get(portofolio, user)
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setDataPortofolio(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  const [key, setKey] = useState("portofolio");
  return (
    <div className="container text-start shadow rounded-2 mt-1 bg-white">
      <div className="row bg-light rounded-3">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="portofolio" title="Portofolio">
            <div className="row mt-2">
              {dataPortofolio ? (
                dataPortofolio.map((item) => (
                  <div>
                    <div className="col-1">
                      <img
                        src={item.photo}
                        alt=""
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <div
                      className="col-9 offset-1"
                      style={{ marginLeft: "100px", marginTop: "-80px" }}
                    >
                      <h5 className="myfont">{item?.name}</h5>
                      <h6 className="myfont3">{item?.repo}</h6>
                      <h6 className="myfont2 mb-4">{item?.type}</h6>
                      <hr />
                    </div>
                  </div>
                ))
              ) : (
                <h1>...Loading</h1>
              )}
            </div>
          </Tab>
          <Tab eventKey="pengalamanKerja" title="Pengalaman kerja">
            <div className="row mt-2">
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
                      className="col-9 offset-1"
                      style={{ marginLeft: "100px", marginTop: "-80px" }}
                    >
                      <h5 className="myfont">{item?.position}</h5>
                      <h6 className="myfont3">{item?.company_name}</h6>
                      <h6 className="myfont3 color-font">
                        {item?.work_start}-{item?.work_end}
                      </h6>
                      <h6 className="myfont2 mb-4">{item?.description}</h6>
                      <hr />
                    </div>
                  </div>
                ))
              ) : (
                <h1>...Loading</h1>
              )}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default NavTabs;
