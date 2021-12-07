import React from "react";

const CountTitle = () => {
    console.log("Rendering Count title.")
    return <h1>Counter Title</h1>
}

export default React.memo(CountTitle);