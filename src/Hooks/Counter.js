import React, {useState, useCallback, useMemo, useEffect, useLayoutEffect} from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import CountTitle from "./CountTitle";
export default function Counter() {
    let [counter1, useCounter1] = useState(0);
    const [counter2, useCounter2] = useState(0);
    useEffect(() => {
        console.log("Use Effect called!");
    }, [counter1])

    useLayoutEffect(() => {
        console.log("Use layout effect called!");
    }, [counter2])
    const IncrementCounterBy1 = useCallback(()=> {
        useCounter1(prevCount => prevCount + 1);
        //console.log("Increment counter by 1 called.");
    }, [counter1]);

    const IncrementCounterBy2 = useCallback(() => {
        useCounter2(prevCount => prevCount + 2);
        //console.log("Increment counter by 2 called.");
    }, [counter2]);

    const isEven = useMemo(() => {
        let count = 0;
        while (count < 2000000000) {
            count++;
        }
        return counter1 % 2 === 0;
    }, [counter1]);

    return (
        <div>
            <CountTitle/>
            <Counter1 text= "Counter 1" count={counter1}/>
            <span>{isEven ? "Even" : "Odd"}</span>
            <Counter2 text= "Counter 2" count={counter2}/>
            <button onClick={IncrementCounterBy1}>Counter 1</button>
            <button onClick={IncrementCounterBy2}>Counter 2</button>
        </div>
    )
}