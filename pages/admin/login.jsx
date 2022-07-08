import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import Image from "next/image";
import UserService from "services/UserService";
import { setAdminData } from "redux/admin";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState({ email: "", password: "" });
  const router = useRouter();
  const loginAdmin = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      let userDataResponse = await UserService.login(email, password);
      if (userDataResponse.status === "success") {
        dispatch(setAdminData(userDataResponse.data));
        router.push("/admin");
      } else {
        setError(userDataResponse.data);
      }
    }
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className="admin">
      <Image
        src="/images/login-background.jfif"
        alt="login-background"
        quality={100}
        objectFit="cover"
        blurDataURL="/images/blur.png"
        loading="lazy"
        placeholder="blur"
        layout="fill"
      />
      <div className="admin__login-form">
        <Form onSubmit={loginAdmin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInput1"
              label="Enter E-mail"
              className="mb-3"
            >
              <Form.Control
                required
                value={email}
                onChange={changeEmail}
                type="email"
                placeholder="Enter E-mail"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="password-box mb-3"
          >
            <FloatingLabel
              controlId="floatingInput2"
              label="Enter Password"
              className="mb-3"
            >
              <Form.Control
                required
                value={password}
                onChange={changePassword}
                type={passwordType}
                placeholder="Enter Password"
              />
              <span className="password-type" onClick={togglePassword}>
                {passwordType === "password" ? "SHOW" : "HIDE"}
              </span>
            </FloatingLabel>
          </Form.Group>
          <div className="my-2 text-danger">{error.email}</div>
          <div className="my-2 text-danger">{error.password}</div>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="w-50">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}
export const getServerSideProps = async (ctx) => {
  const myCookies = ctx.req?.cookies || "";
  if (myCookies.decoreAdmin) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
