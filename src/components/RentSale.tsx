import { FC, useState } from "react";
import { FiHome } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import { AiFillCaretDown } from "react-icons/ai";

const RentSale: FC = () => {
  const [selectedTab, setSelectedTab] = useState<"sale" | "rent">("sale");
  const [listOpen, setListOpen] = useState<boolean>(false);
  const [listSelected, setListSelected] = useState<
    "Villa" | "Old School" | "Modern" | "Simple House" | "Select property type"
  >("Select property type");
  const options: ["Villa", "Old School", "Modern", "Simple House"] = [
    "Villa",
    "Old School",
    "Modern",
    "Simple House",
  ];

  return (
    <div className="mt-16">
      <div>
        <div className="flex">
          <button
            onClick={() => setSelectedTab("sale")}
            className={`px-6 font-medium py-3 rounded-tl-md ${
              selectedTab === "sale" ? "bg-white text-blue-600" : "bg-gray-600"
            }`}
          >
            Sale
          </button>
          <button
            onClick={() => setSelectedTab("rent")}
            className={`px-6 font-medium py-3 rounded-tr-md ${
              selectedTab === "rent" ? "bg-white text-blue-600" : "bg-gray-600"
            }`}
          >
            Rent
          </button>
        </div>
        <div
          className="flex flex-col lg:flex-row bg-white text-black relative rounded-tr-md rounded-br-md rounded-bl-md"
          style={{ width: "fit-content" }}
        >
          <div className="py-8 px-4 sm:px-8 flex space-x-8 items-center border-r-2 border-gray-300">
            <FiHome className="text-blue-600" fontSize="1.5rem" />
            <div
              className="flex relative w-48 justify-between items-center space-x-4 overflow-visible no-tap-highlight"
              onMouseEnter={() => setListOpen(true)}
              onMouseLeave={() => setListOpen(false)}
              onTouchStart={() => setListOpen(true)}
              style={{
                userSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
                MozUserSelect: "none",
              }}
            >
              <span className="font-medium">{listSelected}</span>
              <AiFillCaretDown color="#222" />
              <div
                className="absolute !ml-0 left-0 top-full bg-white right-0 flex flex-col border border-black rounded transition duration-300 cursor-pointer origin-top w-full"
                style={
                  listOpen
                    ? {
                        transform: "scaleY(1)",
                        opacity: 1,
                      }
                    : {
                        transform: "scaleY(0)",
                        opacity: 0,
                      }
                }
              >
                {options.map((value, index) => (
                  <span
                    key={index}
                    className={`py-2 ${
                      value === listSelected
                        ? "bg-blue-200 hover:bg-blue-200"
                        : "hover:bg-gray-200"
                    } font-medium px-4`}
                    onClick={() => {
                      setListSelected(value);
                      setListOpen(false);
                    }}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="px-4 py-2 sm:px-8 flex-col md:flex-row flex space-y-6 md:space-y-0 md:space-x-6 items-center w-max">
            <div className="flex space-x-6 items-center">
              <RiSearch2Line className="text-blue-600" fontSize="1.5rem" />
              <input
                className="px-4 outline-none md:w-80 font-barlow font-medium"
                placeholder="Search by location or Property ID..."
                type="search"
              />
            </div>
            <button
              onClick={() => alert("LOL. this is a dummy website.")}
              className="py-3 px-6 sm:py-4 sm:px-8 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex space-y-4 md:text-lg lg:space-y-0 flex-col lg:flex-row lg:space-x-6 lg:items-center mt-8">
        <div className="flex items-center space-x-2">
          <input onChange={() => {}} type="checkbox" name="c1" id="c1" />
          <label htmlFor="c1">
            Only properties in exclusive repesentation.
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input onChange={() => {}} type="checkbox" name="c2" id="c2" />
          <label htmlFor="c2">Only new developments.</label>
        </div>
      </div>
    </div>
  );
};

export default RentSale;
