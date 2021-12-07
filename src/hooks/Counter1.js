import React from "react";

const Counter1 = ({text, count}) => {
    console.log("Rendering counter 1");
    return <div>{text} - {count}</div>
}

export default React.memo(Counter1);