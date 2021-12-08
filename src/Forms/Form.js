import React, {useState} from "react";
const TestForm = () => {
    const [inputs, setInputs] = useState({});
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    const onFormChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(prevState => ({...prevState, [name]: value}))
      console.log(name + ":" + value);
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={onFormSubmit}>
                <label>Enter your name:
                <input
                    type= "text"
                    value={inputs.username || ""}
                    name= "username"
                    onChange={onFormChange} />
                </label>
                <input
                    type= "text"
                    value={inputs.password || ""}
                    name= "password"
                    onChange={onFormChange} />
                <input type= "submit"/>
            </form>
        </div>
    )
}

export default TestForm;