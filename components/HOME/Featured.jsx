import Image from "next/image";

export default function Featured() {
  return (
    <section className="featured">
      <div className="featured-img-container">
        <Image
          src="/images/featured.jfif"
          alt="image"
          loading="lazy"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="shape header-shape-four">
          <Image
            src="/images/shapes/shape-4.png"
            alt="shape"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="text">
        <div className="title">Hey There !</div>
        <div className="sub-title">I'm A designer</div>
        <p className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          labore.
        </p>
      </div>
    </section>
  );
}
