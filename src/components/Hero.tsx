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
      className="px-8 py-12 md:py-0 md:px-28 flex flex-col justify-center"
      style={
        hasMounted
          ? {
              zIndex: 3,
              height: !isMobile ? `calc(100vh - ${navHeight}px)` : "",
            }
          : {
              zIndex: 3,
            }
      }
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
