import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Assets from "../../assets/img";
import Form from "react-bootstrap/Form";
import { ModalBody } from "react-bootstrap";

const ModalProfilePerekrut = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div
        className="btn-new image-edit"
        style={{ marginLeft: "77px" }}
        onClick={handleShow}
      >
        <img
          src={Assets.ubah}
          alt=""
          style={{ marginTop: "-230px", marginLeft: "800px" }}
          onClick={handleShow}
        />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Background Profile</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Background Profile</Form.Label>
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
export default ModalProfilePerekrut;
