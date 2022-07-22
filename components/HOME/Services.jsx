import React from "react";
import {
  BiPaintRoll,
  BiChalkboard,
  BiBriefcase,
  BiBuildingHouse,
} from "react-icons/bi";
import { GiTwoShadows } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";
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
                  Interior designers bring to life an artistic vision for work
                  and living spaces, seeing out a project from conception to
                  creation. Design plans should be cognizant of safety and
                  functionality requirements and maintain a strict adherence to
                  building codes and regulatory standards.
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
                  Develop construction drawings using AutoCAD; coordinate bid
                  process and vendor selection; and manage construction process
                  through final punch list. Manage design and customer
                  experience, along with email newsletters, digital promotional
                  creative and graphical print marketing materials
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
                  Our custom home design service is tailored to work with
                  private clients who want a unique design that is crafted to
                  their specific family needs and lifestyle. This process
                  involves developing a new design concept that transitions to a
                  complete set of construction documents.
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
                  For exceptional commercial furniture from the best
                  manufacturers in the industry, turn to Commercial Design
                  Services. We have spent decades helping business owners ,
                  design and furnish their interior office spaces, and we are
                  well equipped to outfit a wide array of commercial
                  environments
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
                <BsBuilding className="icon" />
              </div>
              <div className="services-content mt-15">
                <h4 className="services-title">Exterior Design</h4>
                <p className="mt-20">
                  Your exterior most times defines your personality since it’s
                  the first impression for everyone at your homes. In short, it
                  summaries who you are. As its already proven that modern and
                  contemporary exterior house designs are becoming the most
                  popular each day for house owners and those intending to own
                  houses, Tegan stands to provide unique modern and contemporary
                  house facades for our clients. We are trans generational
                  through study and exposure when it comes to the designing
                  world.
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
                  In a world of start-ups, entrepreneurs and flexible
                  freelancers – the demand for inspiring, beautifully designed
                  coworking spaces is bigger than ever. Underutilised office
                  spaces can become lucrative coworking spaces. If you have the
                  building space, we have the ideas and the strategy to deliver
                  an office fit-out that makes you stand out in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
