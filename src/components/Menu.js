import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useMenu from '../utils/useMenu';
import CategoryAccordion from './CategoryAccordion'; // <-- NEW import

const RestaurantMenu = () => {
    const { resId } = useParams();
    const menuData = useMenu(resId);
    const [openIndex, setOpenIndex] = useState(null);

    if (!menuData) return <Shimmer />;

    const restaurantInfo = menuData?.data?.cards?.find(
        (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card;

    const rawMenu = menuData?.data?.cards?.find(
        (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

    const categories = rawMenu.filter(
        (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="menu p-6 max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-1">{restaurantInfo?.name}</h1>
                <p className="text-gray-600">{restaurantInfo?.cuisines?.join(', ')}</p>
                <p className="text-sm text-gray-500">{restaurantInfo?.costForTwoMessage}</p>
            </div>

            {categories.map((category, index) => (
                <CategoryAccordion
                    key={index}
                    title={category.card.card.title}
                    items={category.card.card.itemCards?.map((item) => item.card.info) || []}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;