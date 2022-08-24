import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./buySell.css";
const BuySell = ({ bg }) => {
  return (
    <section className="buySell" style={{ backgroundColor: `${bg}` }}>
      <h2>
        BUY AND sell CFD'S on <br /> hundreds of assets
      </h2>
      <div className="buySell__item">
        <Link to="/Forex">
          <p>Forex</p>
        </Link>
        <Link to="/Metals">
          <p>Metals</p>
        </Link>
        <Link to="/Indices">
          <p>Indices</p>
        </Link>
        <Link to="/Equities">
          <p>Equities</p>
        </Link>
        <Link to="/Cryptocurrencies">
          <p>Cryptocurrencies</p>
        </Link>
        <Link to="/Energies">
          <p>Energies</p>
        </Link>
        <Link to="/Commodities">
          <p>Commodities</p>
        </Link>
      </div>
      <div className="buySell__content">
        <div className="button-container">
          <Button button1="Sell 35,846" button2="Buy 35,878" />
        </div>
      </div>
    </section>
  );
};

export default BuySell;
