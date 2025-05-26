import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { UserContext } from "../App";


const Body = () => {

  const { setUserName, loggedInUser } = useContext(UserContext);
  const { listOfRestaurants, loading } = useRestaurantList(); // ✅ use the hook
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const restaurantListToRender =
    filterRestaurant.length > 0 ? filterRestaurant : listOfRestaurants;




  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);



  if (onlineStatus === false) return (
    <h1>🔴Looks like you are  Offline!!</h1>
  )



  if (loading) return <Shimmer />;
  return (
    <div className="body">
      <div className="filter">
        <div className="search m-2 p-4">
          <input
            data-testid="searchInput"
            id="ipsearch"
            value={SearchText}
            style={{ marginRight: "10px" }}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search restaurants..."
            className="w-1/2 p-2 border border-solid border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="btn px-2 py-1 bg-red-500 text-white rounded-md hover:bg-blue-600 border border-solid border-black"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info?.name
                  ?.toLowerCase()
                  .includes(SearchText.toLowerCase())
              );
              setFilterRestaurant(filtered);
              console.log("Search clicked!");
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-4 flex items-center">
          <label htmlFor="username" className="mr-2">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            className="w-1/2 p-2 border border-solid border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setUserName(e.target.value)}
            onBlur={() => {
              console.log("Username set to:", loggedInUser);
            }}
            value={loggedInUser.name}
          />
        </div>
        <div className="search m-2 p-4 flex items-center">

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) => res.info?.avgRating > 4.5);
              setFilterRestaurant(filtered);
            }}
          >
            Top Rated
          </button>
        </div>

      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {restaurantListToRender.map((restaurant, index) => {
          const resData = restaurant?.data;
          const isPromoted = resData?.promoted;

          const CardComponent = isPromoted ? RestaurantCardWithPromotedLabel : RestaurantCard;

          return (
            <CardComponent key={resData?.id || index} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;