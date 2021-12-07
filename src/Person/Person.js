import React from "react";
import PropTypes from "prop-types";

var Person = (props) => {
    const {name, age} = props;
    Person.propTypes = {
        name: PropTypes.string,
        age: PropTypes.number
    }
   return (
       <div>
          <p>My name is {name} and I am {age} years old.</p>
          <p></p>
       </div>
   )
}

Person.defaultProps = {
    name: "Default Name",
    age: "25"
}

export default Person;