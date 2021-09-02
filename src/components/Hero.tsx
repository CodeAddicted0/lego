import { FC } from "react";
import RentSale from "./RentSale";

const Hero: FC = () => {
  return (
    <div
      className="px-8 md:px-28 flex flex-col py-20 md:mt-12"
      style={{ zIndex: 3 }}
    >
      <h1 className="font-openSans text-4xl font-bold md:text-7xl leading-none">
        Sell or rent
        <br /> your home at
        <br /> the best price.
      </h1>
      <RentSale />
    </div>
  );
};

export default Hero;
