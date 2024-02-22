import React from "react";
import ReactDOM from "react-dom";

//JS code
// const heading = document.createElement("h1")
// heading.innerHTML = "Hello from Javascript!";
// const root = document.getElementById("root")
// root.appendChild(heading)

//React code
// const heading = React.createElement("h1", {id: "heading"}, "Hey from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);

//More complex struture
const parentDiv = React.createElement("div", { id: "heading" },
    [React.createElement("div", { class: "child1" },
        [React.createElement("h1", {}, "Hey I ammm updated H1!"), React.createElement("h2", {}, "Hey I am H2!")]),
    React.createElement("div", { class: "child2" },
        [React.createElement("h1", {}, "Hey I am H1!"), React.createElement("h2", {}, "Hey I am H2!")])])

root.render(parentDiv)