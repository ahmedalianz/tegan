import React from "react";
import {
  BiPaintRoll,
  BiChalkboard,
  BiBriefcase,
  BiBuildingHouse,
} from "react-icons/bi";
import { GiLoveLetter, GiTwoShadows } from "react-icons/gi";
export default function Services() {
  return (
    <section id="service" className="services-area pt-125 pb-130 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-20">
              <h5 className="sub-title mb-15">Our Services</h5>
              <h2 className="title">What We Do?</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="single-services text-center mt-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="services-icon">
                <BiPaintRoll className="icon" />
              </div>
              <div className="services-content mt-15">
                <h4 className="services-title">Interior Design</h4>
                <p className="mt-20">
                  Mauris aliquam, turpis sed mattis placerat, justo risus
                  pellentesque quam, id finibus risus arcu eget neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="single-services text-center mt-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.8s"
            >
              <div className="services-icon">
                <BiChalkboard className="icon" />
              </div>
              <div className="services-content mt-15">
                <h4 className="services-title">Design Consultancy</h4>
                <p className="mt-20">
                  Mauris aliquam, turpis sed mattis placerat, justo risus
                  pellentesque quam, id finibus risus arcu eget neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="single-services text-center mt-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="1.2s"
            >
              <div className="services-icon">
                <BiBuildingHouse className="icon" />
              </div>
              <div className="services-content mt-15">
                <h4 className="services-title">Residential Design</h4>
                <p className="mt-20">
                  Mauris aliquam, turpis sed mattis placerat, justo risus
                  pellentesque quam, id finibus risus arcu eget neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="single-services text-center mt-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <div className="services-icon">
                <BiBriefcase className="icon" />
              </div>
              <div className="services-content mt-15">
                <h4 className="services-title">Commercial Design</h4>
                <p className="mt-20">
                  Mauris aliquam, turpis sed mattis placerat, justo risus
                  pellentesque quam, id finibus risus arcu eget neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="single-services text-center mt-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.8s"
            >
              <div className="services-icon">
                <GiLoveLetter className="icon" />
              </div>
              <div className="services-content mt-15">
                <h4 className="services-title">Hospitality Design</h4>
                <p className="mt-20">
                  Mauris aliquam, turpis sed mattis placerat, justo risus
                  pellentesque quam, id finibus risus arcu eget neque.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div
              className="single-services text-center mt-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="1.2s"
            >
              <div className="services-icon">
                <GiTwoShadows className="icon" />
              </div>
              <div className="services-content mt-15">
                <h4 className="services-title">Co-working Space Design</h4>
                <p className="mt-20">
                  Mauris aliquam, turpis sed mattis placerat, justo risus
                  pellentesque quam, id finibus risus arcu eget neque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
