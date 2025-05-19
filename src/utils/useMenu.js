import React, { useEffect, useState } from 'react'
import { SPECIFIC_MENU_URL } from './constants';

const useMenu = (resId) => {
    const [menuData, setMenuData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(
                    SPECIFIC_MENU_URL + resId
                );
                const json = await response.json();
                setMenuData(json);
            } catch (err) {
                console.error("Failed to fetch menu:", err);
                setLoading(false);
                // setLoading(false);
            }
        };

        fetchMenu();
    }, [resId]);

    return menuData
}

export default useMenu