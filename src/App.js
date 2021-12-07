import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import {TodoList} from "./hooks/Todo-list";
import Form from "./hooks/Form";
import Counter from "./hooks/Counter";

class App extends Component {
    state = {
        name: "Anik"
    }
    // constructor() {
    //     super();
    //     this.state = {
    //         name: "Anik"
    //     }
    // }

    clickHandler = (text) => {
        //console.log("Button clicked!");
        console.log(text);
        //console.log("State: " + this.state.name);
        this.state = {name: "Sajli"}
        this.setState({
            name: "sajli"
        });
        console.log("Updated State: " + this.state.name);
    }

  render() {
      var children = {
          name: "Children",
          purpose: "test"
      }

    return (
      <div>
          <h1 className = 'App'>This is a react application.</h1>
          <button onClick = {() => {
              this.clickHandler("text")
          }}>Click me</button>
          <p>This is a random number --> {Math.random()}</p>
          <Person name = {this.state.name} age = "25" />
          <Person>{children}</Person>
          <TodoList />
          <Form/>
          <Counter/>
      </div>
    );
  }
}

export default App;
