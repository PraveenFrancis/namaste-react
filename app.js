const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const parent = React.createElement(
  "div",
  { id: "parent" },
[React.createElement(
    "div",
    { id: "child1" },

    [
      React.createElement("h1", { id: "h1" }, "i'm h1 tag"),
      React.createElement("h2", { id: "h1" }, "i'm h1 tag"),
    ]
  ), React.createElement(
    "div",
    { id: "child2" },

    [
      React.createElement("h1", { id: "h1" }, "i'm h1 tag"),
      React.createElement("h2", { id: "h1" }, "i'm h1 tag"),
    ]
  )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
