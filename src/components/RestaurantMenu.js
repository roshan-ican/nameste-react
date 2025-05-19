import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import Menu from './Menu';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);


  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo.info ?? {};
  const items = resInfo.menu;

  console.log(items, "items__items")

  return (
    <div className="menu p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">{name}</h1>
      <p className="text-gray-600 mb-2">{cuisines?.join(', ')}</p>
      <p className="text-sm text-gray-500 mb-4">{costForTwoMessage}</p>

      <hr className="my-4" />

      <Menu items={items} />
      {/* {items.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))} */}
    </div>
  );
};

export default RestaurantMenu;