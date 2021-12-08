import React, {Fragment, useEffect, useRef} from "react";
import Input from "./Input";

const form = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();
    })
    return (
        <Fragment>
            <div>
                <Input ref={inputRef} type="text" placeholder="Enter something here."/>
            </div>
            <SampleRenderProps/>
        </Fragment>
    )
}

class SampleRenderProps extends React.Component {
    render() {
        return (
            <div>
                <RenderPropsComponent
                    render = {() => {
                        return(
                            <h1>This text is from Sample Render Props</h1>
                        )
                    }
                    }
                />
            </div>
        )
    }
}

class RenderPropsComponent extends React.Component {
    render() {
        return this.props.render();
    }
}

export default form;