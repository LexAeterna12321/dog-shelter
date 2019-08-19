import React from "react";
import Dog from "./Dog";
const Dogs = props => {
  return (
    <ul className="Dogs">
      {props.dogs.map(dog => {
        return <Dog key={dog.name} {...dog} />;
      })}
    </ul>
  );
};

export default Dogs;
