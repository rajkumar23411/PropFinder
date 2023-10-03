import { BsHeart } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import PropertyFeat from "./PropertyFeat";
import ButtonType2 from "./ButtonType2";
import { Link } from "react-router-dom";
const PropertyCard = ({ item }) => {
    return (
        <Link
            to={`/property/${item.id}`}
            className="bg-white h-full w-[95%] rounded-3xl  p-2 flex flex-col gap-4 relative"
        >
            {item.popular && (
                <div className="absolute z-20 top-[52%] -left-2 -translate-y-[52%] ">
                    <div className="popularTag">
                        <span>Popular</span>
                    </div>
                </div>
            )}
            <div className="h-72 w-full rounded-3xl overflow-hidden relative">
                <img
                    src={item.image}
                    alt="property"
                    className="h-full w-full object-cover"
                />
                <div className="bg-white text-blue-700 font-medium absolute top-4 left-4 px-4 py-2 rounded-3xl text-sm capitalize">
                    {item.purpose}
                </div>
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                    <BsHeart className="text-blue-700" />
                </div>
            </div>
            <div className="px-2 flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                    <CiLocationOn className="text-red-700 text-lg" />
                    <span className="text-sm text-gray-600 font-medium">
                        8558 Green Rd.
                    </span>
                </div>
                <div className="font-semibold text-xl text-gray-700 capitalize">
                    {item.area} - {item.address}
                </div>
                <PropertyFeat item={item} />
                <div className="flex items-center justify-between border-t border-gray-300 py-4">
                    <div>
                        <span className="text-blue-600 text-xl font-semibold">
                            ${item.price}
                        </span>
                        <span className="font-medium text-gray-600">
                            /month
                        </span>
                    </div>
                    <ButtonType2>Read More</ButtonType2>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
