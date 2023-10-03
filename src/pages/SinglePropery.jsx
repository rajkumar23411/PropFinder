import { useParams } from "react-router-dom";
import Header from "../components/Header";
import datas from "../data.json";
import PropertyCard from "../components/PropertyCard";
import Container from "../components/Container";
import ButtonType2 from "../components/ButtonType2";
const SinglePropery = () => {
    const { id } = useParams();
    const property = datas.property.find((item) => item.id === id);
    const handleClick = () => {
        window.history.back();
    };
    return (
        <Container>
            <Header />
            <ButtonType2 handleClick={handleClick}>Back</ButtonType2>
            <div className="w-[28rem] mt-4">
                <PropertyCard item={property} />
            </div>
        </Container>
    );
};

export default SinglePropery;
