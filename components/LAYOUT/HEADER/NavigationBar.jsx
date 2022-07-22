import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import UseWhatsapp from "whatsapp-react-component";
export default function NavigationBar() {
  const [show, setShow] = React.useState(false);
  const hideMenu = () => setShow(false);
  const showMenu = () => setShow(true);
  const onSubmit = () => {
    // Pass values to the component
    UseWhatsapp(
      "+201121439820",
      "Hello Tegan I'd Like To Know More About The Services You Provide"
    );
  };
  return (
    <Container className="navigation-bar">
      <Navbar expand="lg" sticky="top">
        <Navbar.Brand href="/">
          <Image src="/images/logo.png" alt="Logo" width={60} height={80} />
        </Navbar.Brand>

        <Nav className={`me-auto ${show ? "show" : "hide"}`}>
          <span className="close-icon" onClick={hideMenu}>
            X
          </span>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#service">Services</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <div className="navbar-btn ml-20" onClick={onSubmit}>
            <button className="main-btn">
              <BsWhatsapp /> +20 112 143 9820
            </button>
          </div>
        </Nav>

        <div className="navbar-btn ml-20 menu" onClick={showMenu}>
          <Image src="/images/menu.png" alt="" width="40" height="30" />
        </div>
      </Navbar>
    </Container>
  );
}
