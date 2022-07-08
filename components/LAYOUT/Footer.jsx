import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer id="footer">
      <Container>
        <div className="footer-content">
          <Row>
            <Col md={3}>
              <div className="footer-logo">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={80}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div>
                <BsFillTelephoneFill /> +2-01099019685
              </div>
              <div>
                <MdEmail /> contact@yourmail.com
              </div>

              <div className="social">
                <a
                  href="https://www.facebook.com/sweetbakery.co.uk/"
                  target="_blank"
                >
                  <Image
                    src="/images/facebook.webp"
                    alt="facebook"
                    width={25}
                    height={25}
                    quality={100}
                    objectFit="cover"
                  />
                </a>
                <a
                  href="https://www.instagram.com/sweetbakery.co.uk/"
                  target="_blank"
                >
                  <Image
                    src="/images/instagram.webp"
                    alt="facebook"
                    width={25}
                    height={25}
                    quality={100}
                    objectFit="cover"
                  />
                </a>
                <a
                  href="https://www.pinterest.com/sweetbakery/"
                  target="_blank"
                >
                  <Image
                    src="/images/twitter.webp"
                    alt="facebook"
                    width={25}
                    height={25}
                    quality={100}
                    objectFit="cover"
                  />
                </a>
              </div>
            </Col>
            <Col md={3}>
              <h2>Essential Links</h2>
              <div>
                <a href="">about</a>
              </div>
              <div>
                <a href="">about</a>
              </div>
              <div>
                <a href="">about</a>
              </div>
            </Col>
            <Col md={3}>
              <h2>Services</h2>
              <div>
                <a href="">about</a>
              </div>
              <div>
                <a href="">about</a>
              </div>
              <div>
                <a href="">about</a>
              </div>
            </Col>
            <Col md={3}>
              <h2>Newsleter</h2>
              <div>
                <p>subscribe to get the new updates</p>
              </div>
              <div>
                <input type="text" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
