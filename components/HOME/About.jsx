import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <Container>
        <div className="about__box">
          <Fade left>
            <div className="left">
              <Image
                src="/images/about1.jpg"
                alt="about"
                loading="lazy"
                layout="fill"
                quality={100}
                placeholder="blur"
                blurDataURL="/images/blur.png"
                objectFit="cover"
              />
            </div>
          </Fade>
          <Fade right>
            <div className="right">
              <div className="about-content mt-45">
                <h4 className="about-welcome">About Us </h4>
                <h3 className="about-title mt-10">Reasons to choose</h3>
                <p className="mt-25">
                  {`We are specialized in the field of Engineering Consultancy in design and implementation which is:- ( Architectural designs - interior decorations - structural designs -Mechanical- electrical and sanitary, light current and others... This is for all types of residential and public facilities`}
                </p>
                <a className="main-btn mt-25" href="#">
                  learn more
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
}
