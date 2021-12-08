import React from "react";

class LifecyclePhase extends React.Component {
    constructor() {
        super();
        console.log("Constructor called.");
    }

    updateState = () => {
        this.setState({Name: "Shajli"});
    }

    componentWillMount() {
        console.log("Component will mount called!")
    }

    componentDidMount() {
        console.log("Component did mount called!")
    }

    componentWillUpdate()
    {
        console.log("Component will update called!");
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate called!");
    }

    // componentWillUnmount() {
    //     console.log("Component will unmount called!");
    // }


    render() {
        return(
            <div>
                <h1>Lifecycle Component</h1>
                <button onClick={this.updateState}>Update State</button>
            </div>
        )
    }
}

export default LifecyclePhase;