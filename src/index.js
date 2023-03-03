import React from "react";
import ReactDom from "react-dom";

function Greeeting() {
    return <h4>This is Keane and this is my first component</h4>;
}

ReactDom.render(<Greeeting />, document.getElementById("root"));
