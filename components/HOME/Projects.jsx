import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useSelector } from "react-redux";
export default function Projects() {
  const { products } = useSelector((state) => state.products);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: products.length > 4 ? 4 : products.length,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: products.length > 3 ? 3 : products.length,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: products.length > 2 ? 2 : products.length,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section id="project" className="project-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-50">
              <h5 className="sub-title mb-15">Featured Works</h5>
              <h2 className="title">Projects You May Love</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row project-active">
          <Slider {...settings}>
            {products.map((product, i) => (
              <div
                key={i}
                style={{ display: "flex", jsutifyContent: "center" }}
              >
                <div className="card">
                  <div className="card-image">
                    <Image
                      src={
                        "/" +
                          process.env.NEXT_PUBLIC_API_URL +
                          "/" +
                          product.image || "/images/about1.jpg"
                      }
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="card-description">
                    <p className="text-title"> {product.title}</p>
                    <p className="text-body">{product.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
