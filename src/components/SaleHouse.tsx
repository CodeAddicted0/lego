import { FC } from "react";
import Image from "next/image";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

interface Props {
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
}

const SaleHouse: FC<Props> = ({
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  image,
}: Props) => {
  return (
    <div className="flex flex-col">
      <Image
        alt="property"
        src={image}
        height={230}
        width={300}
        objectFit="cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUCej+DwADnwIAgg+j6gAAAABJRU5ErkJggg=="
      />
      <div className="space-y-6 bg-white shadow-xl">
        <div className="px-6 mt-6 flex flex-col space-y-2">
          <h1 className="text-xl text-gray-800 font-openSans font-bold">
            {price} USD
          </h1>
          <p className="text-gray-800">{location}</p>
        </div>
        <div className="grid grid-cols-3 border-gray-300 border-t">
          <div className="flex flex-col items-center px-2 py-4">
            <div className="flex space-x-2 items-center text-gray-800">
              <BiBed />
              <h1 className="text-md font-openSans font-bold">{bedrooms}</h1>
            </div>
            <p>Bedrooms</p>
          </div>
          <div className="flex flex-col items-center px-2 py-4">
            <div className="flex space-x-2 items-center text-gray-800">
              <BiBath />
              <h1 className="text-md font-openSans font-bold">{bathrooms}</h1>
            </div>
            <p>Bathrooms</p>
          </div>
          <div className="flex flex-col items-center px-2 py-4">
            <div className="flex space-x-2 items-center text-gray-800">
              <BiArea />
              <h1 className="text-md font-openSans font-bold">
                {area}m<sup>2</sup>
              </h1>
            </div>
            <p>Living Area</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleHouse;
