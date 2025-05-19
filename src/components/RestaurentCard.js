import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo,
        id,

    } = resData.info;

    const data = useContext(UserContext);
    const { loggedInUser } = data;

    return (
        <div className="w-[250px] h-[400px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200 cursor-pointer hover:scale-105">
            <Link
                to={`/restaurants/${id}`}
                className="block w-full h-full"
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <img
                    className="w-full h-[150px] object-cover"
                    src={CDN_URL + cloudinaryImageId}
                    alt={name}
                />
                <div className="p-4 flex flex-col justify-between h-[calc(400px-150px)]">
                    <div>
                        <h3 className="font-bold text-lg mb-2 truncate">{name}</h3>
                        <h4 className="text-gray-600 text-sm mb-2 line-clamp-2">{cuisines.join(", ")}</h4>
                    </div>
                    <div className="mt-auto">
                        <h4 className="text-gray-700 text-sm">{avgRating} ⭐ • {sla?.slaString}</h4>
                        <h4 className="text-gray-700 text-sm">{costForTwo}</h4>
                        <h4 className="text-gray-700 text-sm">{loggedInUser.email}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <span className="absolute top-0 bg-black text-white text-sm px-2 py-1 z-10">
                    Promoted
                </span>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;