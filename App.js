{/* <div id="parent">
    <div id="child">
        <h1>I am h1</h1>
    </div>
</div> */}


const parent = React.createElement("h2", {id : "parent"}, React.createElement("div", {id : "child"}, 
    [React.createElement("h1", {}, "I'm h1"), React.createElement("h2", {id: "sec"}, "I am h2 tag")],
    [React.createElement("h3",{id : "third"}, "this is h3 tag"), React.createElement("h4",{id : "four"}, "This is h4 tag")]
))

const heading = React.createElement("h1", {id : "heading"}, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(parent)