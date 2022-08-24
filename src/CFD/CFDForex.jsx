import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../Components/BuySell/BuySell";
import CFDDetails from "../Components/CFDDetails";
import CFDInfo from "../Components/CFDInfo";
import cfdImg from "../images/cfdImg1.png";
const CFDForex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content ">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Forex</h2>
              <p>
                Foreign exchange or Forex is one of the largest and most liquid
                markets with over 5 trillion dollars traded daily. A trader can
                trade currencies against each other and based on the changing
                values of currencies over time he can make a profit or a loss.
                Exchange rates are defined by the market forces of supply and
                demand and are affected by geopolitical and economic events
                around the globe.
              </p>
              <h3>With Buffet FINANCE you can:</h3>
              <ul>
                <li>Trade 68+ currency pairs: majors, minors and exotics</li>
                <li>Direct access to the Forex Market 24/5</li>
                <li>Low spreads and No re-quotes</li>
                <li>No hidden fees</li>
              </ul>
              <div className="button-container">
                <Link to="/allinstrumentsforex" className="button1">
                  Product Specification
                </Link>
                <a href="https://web-trader.online/" className="button2">
                  Open Account
                </a>
              </div>
            </div>
            <div className="cfdHeading__content-img">
              <img src={cfdImg} alt="cfdImg" />
            </div>
          </div>
        </div>
      </section>
      {/* Buy Sell */}
      <BuySell bg="#EBEBEB" />
      {/* Details */}
      <CFDDetails
        heading="Trade Forex CFDs + pairs with Leverage"
        info="Make Forex CFD trades and gain access to leverage until 1:30. Trade on more than 68+ pair."
        button="CURRENCY LIST"
        to="/allinstrumentsforex"
      />
      {/* Info */}
      <CFDInfo />
    </>
  );
};

export default CFDForex;
