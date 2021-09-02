import { FC } from "react";
import Image from "next/image";

const HeroBigImage: FC = () => {
  return (
    <div
      className="absolute right-0 top-0 bottom-0 w-5/12"
      style={{ zIndex: 2 }}
    >
      <Image
        priority={true}
        quality={100}
        alt="house"
        src="/hero.webp"
        layout="fill"
        objectFit="cover"
        className="z-3"
      />
      <div
        className="bg-white absolute opacity-30"
        style={{
          width: "400px",
          height: "400px",
          filter: "blur(200px)",
          bottom: "-20%",
          left: "-50%",
        }}
      ></div>
    </div>
  );
};

export default HeroBigImage;
