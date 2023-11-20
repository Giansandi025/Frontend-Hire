import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Assets from "../../assets/img";
import Form from "react-bootstrap/Form";
import { ModalBody } from "react-bootstrap";
import { FaImage, FaExpandAlt } from "react-icons/fa";

const ModalPortofolio = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button
        className="btn"
        onClick={handleShow}
        style={{
          width: "720px",
          height: "400px",
          border: "dashed 1px",
        }}
      >
        <div className="row">
          <div className="col-lg-12 mb-5  ">
            <img src={Assets.cloud} alt="" />
          </div>
          <div className="col-lg-12 mb-2">
            <h6 className="myfont4">
              Drag & Drop untuk Upload Gambar Aplikasi Mobile
            </h6>
          </div>
          <div className="col-lg-12 mb-5">
            <h6 className="myfont4">
              Atau cari untuk mengupload file dari direktorimu.
            </h6>
          </div>
          <div className="col-lg-3 offset-3">
            <FaImage style={{ marginRight: "7px" }} />
            High-Res Image PNG, JPG or GIF
          </div>
          <div className="col-lg-3">
            <FaExpandAlt style={{ marginRight: "7px" }} />
            Size 1080x1920 or 600x800
          </div>
        </div>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Foto Portofolio</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Foto Portofolio</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            {/* <Form.Group className="mb-3">
                <Form.Label>Background Profile</Form.Label>
                <Form.Control type="file" />
              </Form.Group> */}
          </Form>
        </ModalBody>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
          <button
            className="btn "
            style={{ backgroundColor: "#5E50A1", color: "white" }}
            onClick={handleClose}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalPortofolio;
