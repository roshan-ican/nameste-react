import { useEffect, useState } from 'react';
import { MENU_URL } from './constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (!resId) return;

    const fetchData = async () => {
      try {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();

        // Extract restaurant info
        const restaurantCard = json?.data?.cards?.find(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
        const restaurantInfo = restaurantCard?.card?.card;

        // Extract menu items
        const menuSection = json?.data?.cards?.find(
          (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );

        const rawMenu = menuSection?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
        console.log(rawMenu, "rawMenu")
        const items = rawMenu
          .filter(
            (c) =>
              c?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
          .flatMap((c) => c.card.card.itemCards || [])
          .map((item) => item.card.info);

        const resInfo = {
          info: restaurantInfo,
          menu: items,
        };

        setResInfo(resInfo);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;