import { IoArrowForwardSharp } from "react-icons/io5";
import { FaHourglassHalf } from "react-icons/fa6";
import datas from "../data.json";
import PropertyCard from "../components/PropertyCard";
import Header from "../components/Header";
import ButtonType1 from "../components/ButtonType1";
import ButtonType2 from "../components/ButtonType2";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../components/Container";

const cities = ["New York", "Mumbai", "Paris", "London"];

const Home = () => {
    const [itemsToShow, setItemsToShow] = useState(6);
    const param = useLocation()
        .search.split("=")[1]
        ?.replace("%20", " ")
        ?.toLowerCase();

    const navigate = useNavigate();
    const handleShowMore = () => setItemsToShow(itemsToShow + 3);

    const filteredData = param
        ? datas.property.filter((item) => item.city.toLowerCase() === param)
        : datas.property;

    const handleCityChange = (value) =>
        navigate(`/properties?location=${value.toLowerCase()}`);

    useEffect(() => setItemsToShow(6), [param]);
    return (
        <Container>
            <Header />
            <div className="flex items-center justify-between mt-10">
                <div className="flex items-center gap-4">
                    {cities.map((city) => (
                        <ButtonType1
                            key={city}
                            isActive={param === city.toLowerCase()}
                            city={city}
                            handleCityChange={handleCityChange}
                        />
                    ))}
                </div>
                {param ? (
                    <ButtonType2 handleClick={() => navigate("/properties")}>
                        <span>View All</span>
                        <IoArrowForwardSharp />
                    </ButtonType2>
                ) : (
                    <ButtonType2 handleClick={() => navigate("/")}>
                        Back
                    </ButtonType2>
                )}
            </div>
            <div className="mt-6 grid grid-cols-3 place-items-center gap-6">
                {filteredData.slice(0, itemsToShow).map((item) => (
                    <PropertyCard item={item} key={item.id} />
                ))}
            </div>
            {itemsToShow < filteredData.length && (
                <div className="flex items-center justify-center mt-6">
                    <button
                        onClick={handleShowMore}
                        className="flex items-center gap-2 bg-blue-700 font-medium text-white px-6 py-3 rounded-3xl cursor-pointer hover:bg-blue-800"
                    >
                        <FaHourglassHalf className="text-lg" />
                        <span>Show More</span>
                    </button>
                </div>
            )}
        </Container>
    );
};

export default Home;
