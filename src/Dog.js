import React from "react";
import { Link } from "react-router-dom";
const Dog = ({ name, src }) => {
  return (
    <div className="Dog">
      <Link to={`/dogs/${name.toLowerCase()}`}>
        {" "}
        <img className="Dog__img" src={src} alt={`${name} dog`} />
      </Link>

      <h2 className="Dog__h2">
        <Link className="Dog__link" to={`/dogs/${name.toLowerCase()}`}>
          {name}
        </Link>
      </h2>
    </div>
  );
};

export default Dog;
