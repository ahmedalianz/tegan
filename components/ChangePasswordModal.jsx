import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

import UserService from "../services/UserService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ChangePasswordModal(props) {
  const [error, setError] = useState({ password: "" });
  const [passwordFields, setPasswordFields] = useState({
    password: "",
    new_password: "",
  });
  const changePassword = (e) => {
    setPasswordFields({
      ...passwordFields,
      [e.target.name]: e.target.value,
    });
  };
  const changePasswordHandler = async (e) => {
    e.preventDefault();
    let res = await UserService.changePassword(passwordFields, props.token);
    if (res.status === "success") {
      toast.success(t("password_changed"));
      props.onHide();
    } else {
      toast.error(t("error"));
      console.log(res);
      setError(res.data);
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t("change_password")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={changePasswordHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInput1"
              label={t("Password_old")}
              className="mb-3"
            >
              <Form.Control
                required
                value={passwordFields.password}
                onChange={changePassword}
                type="password"
                name="password"
                placeholder={t("Password_input")}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="password-box mb-3"
          >
            <FloatingLabel
              controlId="floatingInput2"
              label={t("Password_new")}
              className="mb-3"
            >
              <Form.Control
                required
                value={passwordFields.new_password}
                onChange={changePassword}
                type="password"
                name="new_password"
                placeholder={t("Password_input")}
              />
            </FloatingLabel>
          </Form.Group>
          <div className="my-2 text-danger">{error.password}</div>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="w-50">
              {t("change_password")}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
