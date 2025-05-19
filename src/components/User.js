import React, { useEffect, useState } from 'react'

const User = ({ name }) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect of user")
        // console.log("useEffect of user")
        return () => {
            debugger
            console.log("After i unmount called")
        }
    }, [])
    console.log("First Rendered")

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-2">👤 Count: {count} </h2>
            <button onClick={() => setCount(count + 1)} className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">Increment</button>

            <h2 className="text-2xl font-bold mb-2">👤 Name:{name} </h2>
            <h3 className="text-lg mb-1">📍 Location: Bangalore</h3>
            <h4 className="text-md italic">📱 Contact: @roshanican</h4>
        </div>
    )
}

export default User