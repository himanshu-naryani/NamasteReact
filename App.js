const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "H1 Tag"),
    React.createElement("h2", { id: "heading" }, "H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "H1 Tag"),
    React.createElement("h2", { id: "heading" }, "H2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
