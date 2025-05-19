// utils/useRestaurantList.js
import { useState, useEffect } from 'react';
import { RESTAURANT_LIST } from './constants';

const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(
                    RESTAURANT_LIST
                );
                const json = await data.json();

                const restaurants =
                    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

                setListOfRestaurants(restaurants);
            } catch (error) {
                console.error("Failed to fetch restaurant list", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { listOfRestaurants, loading };
};

export default useRestaurantList;