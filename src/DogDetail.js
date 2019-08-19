import React from "react";
import { Redirect } from "react-router-dom";
const DogDetail = props => {
  const dog = props.dogs.filter(dog => {
    return dog.name.toLowerCase() === props.match.params.dogName;
  });
  if (dog.length === 0) {
    return <Redirect to="/dogs/home" />;
  }
  const { src, name, age, facts } = dog[0];

  return (
    <div className="DogDetail">
      <div className="DogDetail__wrapper">
        <div className="DogDetail__img-container">
          <img className="DogDetail__img" src={src} alt={`${name} dog`} />
        </div>
        <h2 className="DogDetail__name">Name: {name}</h2>
        <h2 className="DogDetail__age">Age: {age}</h2>
        <ul className="DogDetail__list">
          Funny things about this dog:{" "}
          {facts.map(fact => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <button
          className="DogDetail__btn"
          onClick={() => props.history.push("/dogs/home")}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default DogDetail;
