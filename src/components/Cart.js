import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemsList from './ItemsList';
import { clearCart } from '../utils/redux/cartSlice';
import { FaShoppingCart, FaTrash } from 'react-icons/fa'; // Import icons

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    // Group cart items by category
    const itemsByCategory = cartItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart()); // Make sure to call the action creator with ()
    };

    return (
        <div className='max-w-4xl mx-auto p-4'>
            {/* Cart Header with Title and Clear Cart Button */}
            <div className='flex justify-between items-center mb-6 border-b pb-4'>
                <div className='flex items-center gap-2'>
                    <FaShoppingCart className='text-red-600 text-2xl' />
                    <h2 className='text-2xl font-bold'>Cart</h2>
                </div>
                
                {Object.keys(itemsByCategory).length > 0 && (
                    <button 
                        onClick={handleClearCart}
                        className='flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors'
                    >
                        <FaTrash />
                        <span>Clear Cart</span>
                    </button>
                )}
            </div>

            {/* Cart Content */}
            <div>
                {Object.keys(itemsByCategory).length > 0 ? (
                    <div className='space-y-6'>
                        {Object.entries(itemsByCategory).map(([category, items]) => (
                            <ItemsList
                                key={category}
                                categoryName={category}
                                items={items}
                            />
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-12'>
                        <FaShoppingCart className='text-gray-300 text-6xl mx-auto mb-4' />
                        <p className="text-xl text-gray-500">Your cart is empty</p>
                    </div>
                )}
            </div>

            {/* Cart Footer - Optional: Add total, checkout button, etc. */}
            {Object.keys(itemsByCategory).length > 0 && (
                <div className='mt-8 border-t pt-4 flex justify-end'>
                    <button className='bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors'>
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
