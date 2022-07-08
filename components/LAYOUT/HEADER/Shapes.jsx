import Image from "next/image";
import React from "react";

export default function Shapes() {
  return (
    <div id="shapes">
      <div className="shape header-shape-one">
        <Image
          src="/images/shapes/shape-1.png"
          alt="shape"
          width={250}
          height={250}
        />
      </div>
      <div className="shape header-shape-two rotate-animation">
        <Image
          src="/images/shapes/shape-2.png"
          alt="shape"
          width={120}
          height={120}
        />
      </div>
      <div className="shape header-shape-three rotate-animation">
        <Image
          src="/images/shapes/shape-3.png"
          alt="shape"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
