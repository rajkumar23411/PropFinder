import { BiBuildings, BiBath, BiBed, BiAtom } from "react-icons/bi";

const FeatureBox = ({ children }) => {
    return <div className="flex flex-col gap-1">{children}</div>;
};

const PropertyFeat = ({ item }) => {
    const iconClass = "text-gray-600 text-lg";
    const features = [
        {
            icon: <BiBuildings className={iconClass} />,
            label: "3 Room",
        },
        {
            icon: <BiBed className={iconClass} />,
            label: `${item.beds} bed`,
        },
        {
            icon: <BiBath className={iconClass} />,
            label: `${item.baths} bath`,
        },
        {
            icon: <BiAtom className={iconClass} />,
            label: "732 sft",
        },
    ];
    return (
        <div className="flex items-center justify-between px-6">
            {features.map((feature) => (
                <FeatureBox key={feature.label}>
                    {feature.icon}
                    <span className="text-gray-600 text-sm font-medium">
                        {feature.label}
                    </span>
                </FeatureBox>
            ))}
        </div>
    );
};

export default PropertyFeat;
