import React from "react";
import { Link } from "react-router-dom";

const CFDDetails = ({ heading, info, button, to }) => {
  return (
    <section className="cfdDetails">
      <div className="cfdDetails__content">
        <h4>{heading}</h4>
        <p>{info}</p>
        <Link to={`${to}`}>
          <button>{button}</button>
        </Link>
      </div>
    </section>
  );
};

export default CFDDetails;
