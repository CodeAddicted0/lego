import { FC, useState } from "react";
import { FiHome } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";

const RentSale: FC = () => {
  const [selectedTab, setSelectedTab] = useState<"sale" | "rent">("sale");

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
          className="flex flex-col md:flex-row bg-white text-black relative rounded-tr-md rounded-br-md rounded-bl-md"
          style={{ width: "fit-content" }}
        >
          <div className="p-8 flex space-x-8 items-center border-r-2 border-gray-300">
            <FiHome className="text-blue-600" fontSize="1.5rem" />
            <select
              defaultValue="default"
              className="outline-none font-medium font-barlow bg-white"
            >
              <option value="default" disabled>
                Select property type
              </option>
              <option className="p-4" value="volvo">
                Villa
              </option>
              <option value="saab">Simple House</option>
              <option value="mercedes">Old School</option>
              <option value="audi">Modern</option>
            </select>
          </div>
          <div className="px-8 py-2 flex-col md:flex-row flex space-y-6 md:space-y-0 md:space-x-6 items-center w-max">
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
              className="py-4 px-8 rounded bg-blue-600 hover:bg-blue-700 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex space-y-2 md:space-y-0 flex-col md:flex-row md:space-x-6 md:items-center mt-8">
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
