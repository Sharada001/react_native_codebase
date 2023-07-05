import { useState } from "react";

const [data, setData] = useState([]);
fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json');

const getMenu = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json');
        const json = await response.json();
        setData(json.menu);
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};

console.log(data);