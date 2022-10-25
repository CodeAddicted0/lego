import { FC, useState, useEffect } from "react";
import RentSale from "./RentSale";
import { useAppSelector } from "../redux/reduxHooks";
import { useMediaQuery } from "react-responsive";

const Hero: FC = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const navHeight = useAppSelector((store) => store.navHeight);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div
      className="px-8 py-12 md:py-12 md:px-28 flex flex-col justify-center z-[3]"
      style={{
        height: !isMobile && hasMounted ? `calc(100vh - ${navHeight}px)` : "",
      }}
    >
      <h1 className="font-openSans text-4xl sm:text-5xl font-bold md:text-7xl leading-none">
        Sell or rent
        <br /> your home at
        <br /> the best price.
      </h1>
      <RentSale />
    </div>
  );
};

export default Hero;
