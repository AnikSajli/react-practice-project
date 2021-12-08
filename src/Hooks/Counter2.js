import React from "react";

const Counter2 = ({text, count}) => {
    console.log("Rendering counter 2");
    return <div>{text} - {count}</div>
}

export default React.memo(Counter2);