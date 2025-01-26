import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h5", {}, "Hello From h1 Tag"),
        React.createElement("h2", {}, "This is nameste react "),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hello From h1 Tag"),
        React.createElement("h2", {}, "Hello From h2 Tag"),

    ]),
])


console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);