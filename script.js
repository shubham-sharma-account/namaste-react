import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"

//JS code
// const heading = document.createElement("h1")
// heading.innerHTML = "Hello from Javascript!";
// const root = document.getElementById("root")
// root.appendChild(heading)

//React code
// const heading = React.createElement("h1", {id: "heading"}, "Hey from react!");
const root = createRoot(document.getElementById("root"));
// console.log(heading);

//More complex struture
// const parentDiv = React.createElement("div", { id: "heading" }, [
//   React.createElement("div", { class: "child1" }, [
//     React.createElement("h1", {}, "Hey I ammm updated H1!"),
//     React.createElement("h2", {}, "Hey I am H2!"),
//   ]),
//   React.createElement("div", { class: "child2" }, [
//     React.createElement("h1", {}, "Hey I am H1!"),
//     React.createElement("h2", {}, "Hey I am H2!"),
//   ]),
// ]);

//JSX syntax

const JsHeading = () => {
  return <h1 className="heading" tabIndex={1}>
  Hey Written in JSX!
</h1>
};

const v1 = 200;
const v2 = 500;

// React functional component Or
//a peice of code that retures a JSX element
const FirstComponent = () => {
  return (
    <div className="div">
        {v1+v2} 
      <JsHeading />
      <JsHeading></JsHeading>
      {JsHeading()}
      <h2>Hey returned from component</h2>
    </div>
  );
};

// console.log("jsHeading ", jsHeading);

console.log(FirstComponent);

root.render(<FirstComponent />);
