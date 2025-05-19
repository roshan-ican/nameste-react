import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

const CategoryAccordion = ({ title, items, isOpen, onToggle }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className="mb-6 border-b">
            <button
                className="w-full text-left py-4 flex justify-between items-center text-red-600 text-2xl font-semibold border border-red-500 shadow-lg"
                onClick={onToggle}
            >
                <p className="text-2xl mx-2">{title}</p>
                <span className="text-xl mx-2">{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
                <div className="flex flex-col divide-y mt-4">
                    {items.map((item) => {
                        const price = (item.price || item.defaultPrice) / 100;
                        return (
                            <div key={item.id} className="flex justify-between py-4 gap-4">
                                {/* LEFT: Text Info */}
                                <div className="flex-1 pr-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        {item.ribbon?.text && (
                                            <span className="text-xs text-red-500 font-bold border border-red-300 px-2 py-0.5 rounded-full">
                                                {item.ribbon.text}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-md font-semibold text-gray-800">
                                        {item.name}
                                    </h3>

                                    {item.ratings?.aggregatedRating?.rating && (
                                        <p className="text-sm text-green-600 font-medium">
                                            ★ {item.ratings.aggregatedRating.rating}{" "}
                                            <span className="text-gray-400">
                                                ({item.ratings.aggregatedRating.ratingCountV2})
                                            </span>
                                        </p>
                                    )}

                                    {item.description && (
                                        <p className="text-sm text-gray-500 mt-1">
                                            {item.description}
                                        </p>
                                    )}

                                    <div className="text-md font-semibold mt-2">₹{price}</div>

                                    {/* Optional: More Details */}
                                    <button className="text-sm mt-2 text-gray-700 border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100 transition">
                                        More Details →
                                    </button>
                                </div>

                                {/* RIGHT: Image + ADD */}
                                <div className="w-28 flex flex-col items-center justify-between">
                                    {item.imageId && (
                                        <img
                                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                                            alt={item.name}
                                            className="rounded-lg object-cover w-full h-24 mb-2"
                                        />
                                    )}
                                    <button
                                        onClick={() => handleAddItem(item)}
                                        className="bg-white border border-green-500 text-green-600 text-sm font-semibold px-4 py-1 rounded-md hover:shadow-md transition"
                                    >
                                        ADD
                                    </button>
                                    <p className="text-xs text-gray-400 mt-1">Customisable</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CategoryAccordion;
