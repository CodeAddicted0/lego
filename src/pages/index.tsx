import Head from "next/head";
import Image from "next/image";
import { useAppSelector } from "../redux/reduxHooks";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
// components
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import HeroBigImage from "../components/HeroBigImage";
import SaleHouse from "../components/SaleHouse";
import ScrollTop from "../components/ScrollToTop";
// libs
import sales from "../libs/salesHouse";
// react icons
import { FcBinoculars } from "react-icons/fc";
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import { BiBed, BiArea } from "react-icons/bi";
import { ImAirplane } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { HiMail, HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { RiUser4Line } from "react-icons/ri";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isNotMobileOrTablet = useMediaQuery({ query: "(min-width: 1024px)" });
  const navHeight = useAppSelector((store) => store.navHeight);
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    window.addEventListener("scroll", () =>
      window.pageYOffset > 300
        ? setShowScrollTop(true)
        : setShowScrollTop(false)
    );
  }, []);

  return (
    <>
      <Head>
        <title>Lego - Real Estate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Navigations */}
      <Nav />
      {showScrollTop && hasMounted && <ScrollTop />}
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
        {!isMobile && hasMounted && <HeroBigImage />}
        <Hero />
      </div>
      {/* Sale Section */}
      <section
        id="properties"
        style={{ scrollMarginTop: `${navHeight}px` }}
        className="md:py-24 lg:px-28 md:px-20 px-8 py-8 flex flex-col bg-[#F3F4F6]"
      >
        <div className="flex items-center justify-between">
          <div className="flex lg:items-center flex-col lg:flex-row">
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
            <p className="text-gray-900 mt-8 lg:ml-24 lg:mt-0 lg:w-1/3 font-medium">
              Proprietary technology, latest market data and strong real estate
              expertise allow us to reach potential buyers and present them with
              a well-priced.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
        className="flex flex-col-reverse py-8 px-8 md:flex-row md:px-20 lg:px-28 md:py-28 items-center"
      >
        <div
          style={{ flexBasis: "40%" }}
          className="flex mt-12 md:mt-0 justify-center items-center relative"
        >
          <Image
            src="/rebsio.webp"
            alt="rebsio"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            width={350}
            height={450}
            className="z-3"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UA8AAgUBQbH2eGIAAAAASUVORK5CYII="
            placeholder="blur"
          />
          <div className="w-40 h-72 right-0 rounded-md bg-gray-300 absolute md:right-10 bottom-0"></div>
        </div>
        <div
          style={{ flexBasis: "60%" }}
          className="flex flex-col md:ml-10 space-y-8 lg:px-12"
        >
          <h1 className="font-openSans text-3xl md:text-4xl text-gray-800">
            Let's Meet Rebsio!
          </h1>
          <p className="font-medium text-gray-600">
            Historic property of noble families over the centuries, then of the
            italian royality, the castle has 8 bedrooms and numerous reception
            rooms spread over approximately 1,000m<sup>2</sup> of living area.
          </p>
          <div className="flex lg:items-center lg:space-x-6 flex-col lg:space-y-0 space-y-4 lg:flex-row">
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
                <h1 className="md:text-2xl text-xl font-openSans font-bold text-gray-800">
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
                <h1 className="md:text-2xl text-xl font-openSans font-bold text-gray-800">
                  8 Bedrooms
                </h1>
                <p className="font-medium">Bedroom</p>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center font-openSans font-bold text-blue-600 text-md lg:!mt-20"
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
        <div className="flex flex-col space-y-12 lg:pr-20 lg:basis-3/5">
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
              style={{ objectFit: "cover", aspectRatio: "1" }}
            />
            <div className="flex flex-col space-y-3 justify-center">
              <p className="text-gray-800 font-openSans md:text-2xl text-xl">
                Joseph Romy
              </p>
              <p className="text-gray-600 text-lg">Founder of Trustpilot</p>
            </div>
          </div>
        </div>
        {isNotMobileOrTablet && hasMounted && (
          <div
            style={{ flexBasis: "40%" }}
            className="grid relative items-center justify-items-end"
          >
            <div className="absolute inset-0 z-3 fade-image"></div>
            <Image
              src="/interior.webp"
              alt="home interior"
              width={500}
              style={{ objectFit: "cover", aspectRatio: "1", width: "100%" }}
              height={550}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UA8AAgUBQbH2eGIAAAAASUVORK5CYII="
              placeholder="blur"
            />
          </div>
        )}
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        style={
          hasMounted
            ? {
                scrollMarginTop: `${navHeight}px`,
                height: isNotMobileOrTablet
                  ? `calc(100vh - ${navHeight}px)`
                  : "",
              }
            : { scrollMarginTop: `${navHeight}px` }
        }
        className="flex space-y-6 lg:space-y-0 flex-col lg:flex-row md:px-20 lg:px-28 px-8 py-12 bg-black-bg"
      >
        <div
          style={{ flexBasis: "60%" }}
          className="flex flex-col space-y-8 justify-between"
        >
          <div className="flex flex-col space-y-4 md:space-y-8">
            <h1 className="font-openSans text-3xl md:text-5xl text-white">
              Get a qoute.
            </h1>
            <p className="text-dim-white text-xl">
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-8">
            <button
              className="space-x-4 border-2 text-dim-white font-medium py-4 px-6 rounded-lg inline-flex items-center border-white md:text-xl hover:bg-dim-white bg-transparent transition duration-300 hover:text-black-bg"
              style={{ width: "fit-content" }}
            >
              <IoMdCall fontSize="1.7rem" />
              <span>+1234 567 8901</span>
            </button>
            <button
              className="space-x-4 text-dim-white font-medium py-4 px-6 rounded-lg inline-flex items-center border-2 border-white md:text-xl hover:bg-dim-white bg-transparent transition duration-300 hover:text-black-bg"
              style={{ width: "fit-content" }}
            >
              <HiMail fontSize="1.7rem" />
              <span>lego@realestate.com</span>
            </button>
            <button
              className="space-x-4 text-dim-white font-medium py-4 px-6 rounded-lg inline-flex items-center border-2 border-white md:text-xl hover:bg-dim-white bg-transparent transition duration-300 hover:text-black-bg"
              style={{ width: "fit-content" }}
            >
              <HiLocationMarker fontSize="1.7rem" />
              <span className="text-left">102 Birmingham Street, London.</span>
            </button>
          </div>
          <div className="flex space-x-8 items-center">
            <button
              className="hover:bg-gray-800 bg-transparent transition duration-300 text-dim-white text-2xl rounded-full p-4 grid place-items-center"
              aria-label="facebook"
            >
              <FaFacebookF />
            </button>
            <button
              className="hover:bg-gray-800 bg-transparent transition duration-300 text-dim-white text-2xl rounded-full p-4 grid place-items-center"
              aria-label="twitter"
            >
              <FiTwitter />
            </button>
            <button
              className="hover:bg-gray-800 bg-transparent transition duration-300 text-dim-white text-2xl rounded-full p-4 grid place-items-center"
              aria-label="instagram"
            >
              <FiInstagram />
            </button>
          </div>
        </div>
        <div
          style={{ flexBasis: "40%" }}
          className="bg-dim-white rounded-lg h-full flex flex-col space-y-6 px-6 py-12 md:p-12"
        >
          <div className="flex flex-col space-y-3 relative">
            <div className="flex w-full rounded-md shadow-sm items-center bg-dim-white relative text-xl">
              <span className="flex items-center justify-between pointer-events-none absolute ml-4">
                <RiUser4Line className="text-gray-600" />
              </span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="sdc"
                className="w-full pl-12 pr-4 text-base bg-transparent border-gray-300 rounded-md inline-block py-4 placeholder:text-transparent outline-none peer border-2 focus:border-blue-600 font-medium autofill:!shadow-[0_0_0_30px_#f0f0f0_inset]"
              />
              <label
                htmlFor="name"
                style={{ width: "fit-content" }}
                className="transition-all text-lg leading-relaxed font-medium text-neutral-500 duration-300 text-md mx-12 bg-dim-white peer-focus:-translate-y-full peer-placeholder-shown:-translate-y-0 -translate-y-full px-2 pointer-events-none absolute"
              >
                Full Name
              </label>
            </div>
          </div>
          <div className="flex flex-col space-y-3 relative">
            <div className="flex w-full rounded-md shadow-sm items-center bg-dim-white relative text-xl">
              <span className="flex items-center justify-between pointer-events-none absolute ml-4">
                <HiOutlineMail className="text-gray-600" />
              </span>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="sdc"
                className="w-full pl-12 pr-4 text-base bg-transparent border-gray-300 rounded-md inline-block py-4 placeholder:text-transparent outline-none peer border-2 focus:border-blue-600 font-medium autofill:!shadow-[0_0_0_30px_#f0f0f0_inset]"
              />
              <label
                htmlFor="email"
                style={{ width: "fit-content" }}
                className="transition-all text-lg leading-relaxed font-medium text-neutral-500 duration-300 text-md mx-12 bg-dim-white peer-focus:-translate-y-full peer-placeholder-shown:-translate-y-0 -translate-y-full px-2 pointer-events-none absolute"
              >
                Email
              </label>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <label
              htmlFor="message"
              style={{ width: "fit-content" }}
              className="font-medium text-md"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full text-base bg-transparent border-gray-300 rounded-md inline-block p-4 outline-none border-2 bg-dim-white focus:border-blue-600 font-medium"
              rows={3}
            />
          </div>
          <button
            className="px-10 py-3 text-dim-white font-medium bg-blue-500 hover:bg-blue-600 rounded-lg"
            style={{ width: "fit-content" }}
            onClick={() => alert("LOL. this is a dummy website.")}
          >
            Send
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
