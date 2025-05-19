import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Dumbo",
                location: "Bangalore"
            }
        }

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/roshan-ican")
        const json = await data.json()
        console.log(json, "json__data")

        this.setState({
            userInfo: json
        })
        this.timer = setInterval(() => {
            console.log("setInterval called")
        }, 1000)

        // return () => {
        //     clearInterval(fun)
        // }
    }

    componentDidUpdate() {
        console.log(this.props.name + "Child DidUpdate called")
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log(this.props.name + "Child WillUnmount called")
    }



    render() {
        const { name, location, company, avatar_url } = this.state.userInfo
        // const { count, count1 } = this.state
        console.log(this.props.name + "Child Render called")
        // debugger
        return (
            <div className="max-w-sm mx-auto mt-10 p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                {/* <h2 className="text-2xl font-bold mb-2">👤 Count: {count} || {count1}</h2> */}
                {/* <button onClick={() => this.setState({ count: count + 1 })} className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">Increment</button>
                <button onClick={() => this.setState({ count1: count1 + 1 })} className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">Increment separate </button> */}
                <img src={avatar_url} alt="Avatar" className="w-16 h-16 rounded-full mb-2" />
                <h2 className="text-2xl font-bold mb-2">👤 Name: {name}</h2>
                <h3 className="text-lg mb-1">📍 Location: {location}</h3>
                <h4 className="text-md italic">📱 Company: {company}</h4>
            </div>
        )
    }
}

export default UserClass