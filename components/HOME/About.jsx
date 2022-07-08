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
                  {`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.`}
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
