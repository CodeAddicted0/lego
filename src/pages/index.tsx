import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import HeroBigImage from "../components/HeroBigImage";
import { FcBinoculars } from "react-icons/fc";
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import SaleHouse from "../components/SaleHouse";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { BiBed, BiArea } from "react-icons/bi";
import { ImAirplane } from "react-icons/im";
import { useAppSelector } from "../redux/reduxHooks";
import sales from "../libs/salesHouse";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isNotMobile = useMediaQuery({ query: "(min-width: 769px)" });
  const navHeight = useAppSelector((store) => store.navHeight);

  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Lego - Real Estate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Navigation Bar */}
      <Nav />
      {/* Hero Section */}
      <div className="flex flex-col justify-center text-white bg-black-bg relative">
        <div
          className="bg-white absolute opacity-30"
          style={{
            width: "400px",
            height: "400px",
            filter: "blur(200px)",
            top: "-20%",
            left: "-10%",
          }}
        ></div>
        {!isTabletOrMobile && hasMounted && <HeroBigImage />}
        <Hero />
      </div>
      {/* Sale Section */}
      <section
        id="properties"
        style={{ scrollMarginTop: `${navHeight}px` }}
        className="md:py-24 md:px-28 px-8 py-8 flex flex-col bg-[#F3F4F6]"
      >
        <div className="flex items-center justify-between">
          <div className="flex md:items-center flex-col md:flex-row">
            <div className="flex space-x-4 md:space-x-8 items-center">
              <div className="bg-blue-300 grid place-items-center p-3 rounded-full">
                <div
                  className="bg-white rounded-full p-2"
                  style={{ boxShadow: "0 2px 15px 2px rgba(0, 0, 0, 0.7)" }}
                >
                  <FcBinoculars fontSize="2.5rem" />
                </div>
              </div>
              <h1 className="font-openSans ml-10 text-2xl md:text-3xl text-gray-800">
                Latest Property
                <br /> For Sale.
              </h1>
            </div>
            <p className="text-gray-900 mt-8 md:ml-24 md:mt-0 md:w-1/3 font-medium">
              Proprietary technology, latest market data and strong real estate
              expertise allow us to reach potential buyers and present them with
              a well-priced.
            </p>
          </div>
          {!isTabletOrMobile && hasMounted && (
            <BsArrowRight fontSize="1.5rem" />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {sales.map((sale) => (
            <SaleHouse
              price={sale.price}
              image={sale.image}
              location={sale.location}
              area={sale.area}
              bedrooms={sale.bedrooms}
              bathrooms={sale.bathrooms}
              key={sale.location}
            />
          ))}
        </div>
      </section>
      {/* Special Section */}
      <section
        style={{ scrollMarginTop: `${navHeight}px` }}
        id="special"
        className="flex flex-col-reverse py-8 px-8 md:flex-row md:px-28 md:py-28 items-center"
      >
        <div
          style={{ flexBasis: "40%" }}
          className="flex mt-12 md:mt-0 justify-center items-center relative"
        >
          <Image
            src="/rebsio.webp"
            alt="rebsio"
            objectFit="cover"
            width={350}
            height={450}
            className="z-3"
          />
          <div className="w-40 h-72 right-0 rounded-md bg-gray-300 absolute md:right-10 bottom-0"></div>
        </div>
        <div
          style={{ flexBasis: "60%" }}
          className="flex flex-col md:ml-10 space-y-8 md:px-12"
        >
          <h1 className="font-openSans text-2xl md:text-4xl text-gray-800">
            Let's Meet Rebsio! 🔥
          </h1>
          <p className="font-medium text-gray-600">
            Historic property of noble families over the centuries, then of the
            italian royality, the castle has 8 bedrooms and numerous reception
            rooms spread over approximately 1,000m<sup>2</sup> of living area.
          </p>
          <div className="flex md:items-center md:space-x-6 flex-col md:space-y-0 space-y-4 md:flex-row">
            <div className="flex items-center space-x-6">
              <div className="bg-gray-300 grid place-items-center p-3 rounded-full">
                <div
                  className="bg-white rounded-full p-3"
                  style={{
                    boxShadow:
                      "20px 20px 35px #a9adb1, -20px -20px 35px #f9fdff",
                  }}
                >
                  <BiArea fontSize="1.5rem" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-openSans font-bold text-gray-800">
                  1000m<sup>2</sup>
                </h1>
                <p className="font-medium">Living Area</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-gray-300 grid place-items-center p-3 rounded-full">
                <div
                  className="bg-white rounded-full p-3"
                  style={{
                    boxShadow:
                      "20px 20px 35px #a9adb1, -20px -20px 35px #f9fdff",
                  }}
                >
                  <BiBed fontSize="1.5rem" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-openSans font-bold text-gray-800">
                  8 Bedrooms
                </h1>
                <p className="font-medium">Bedroom</p>
              </div>
            </div>
          </div>
          <a
            href=""
            className="flex items-center font-openSans font-bold text-blue-600 text-md md:!mt-20"
          >
            See more Details
            <BsArrowRight fontSize="1.5rem" style={{ marginLeft: "1rem" }} />
          </a>
        </div>
      </section>
      {/* Testimonals Section */}
      <section
        id="testimonial"
        style={{ scrollMarginTop: `${navHeight}px` }}
        className="flex flex-col md:flex-row md:px-28 md:py-20 px-8 py-12"
      >
        <div
          className="flex flex-col space-y-12 md:pr-20"
          style={{ flexBasis: "60%" }}
        >
          <h1 className="font-openSans text-2xl md:text-5xl text-gray-800">
            Here is what our clients are saying about us.
          </h1>
          <div className="flex space-y-2 md:space-y-0 flex-col md:flex-row md:space-x-6 md:items-center">
            <div className="flex space-x-6 items-center">
              <p className="text-2xl font-medium">Excellent</p>
              <div className="flex space-x-2 items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <BsStarFill color="#00b67a" fontSize="1.5rem" key={star} />
                ))}
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <span className="text-2xl font-medium">- </span>
              <ImAirplane fontSize="1.3rem" color="#2563eb" />
              <p className="text-2xl font-medium text-gray-800">Trustpilot</p>
            </div>
          </div>
          <p className="font-medium text-gray-600">
            <q>
              Great way to make the first market value estimate and then to
              select an experienced broker active in the local area for a more
              in-depth study (without any commitment). Professional and
              personalised advice, while avoiding going through the big brokers
              who charge fees that are much too high.
            </q>
          </p>
          <div className="flex space-x-6">
            <Image
              src="/avatar.webp"
              alt="avatar"
              height={100}
              width={100}
              className="rounded-full"
              objectFit="cover"
            />
            <div className="flex flex-col space-y-3 justify-center">
              <p className="text-gray-800 font-openSans text-2xl">
                Joseph Romy
              </p>
              <p className="text-gray-600 text-lg">Founder of Trustpilot</p>
            </div>
          </div>
        </div>
        {isNotMobile && hasMounted && (
          <div
            style={{ flexBasis: "40%" }}
            className="grid relative place-items-center"
          >
            <div className="absolute inset-0 z-3 fade-image"></div>
            <Image
              src="/interior.webp"
              alt="home interior"
              width={500}
              objectFit="cover"
              height={550}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
