import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../Components/BuySell/BuySell";
import CFDDetails from "../Components/CFDDetails";
import CFDInfo from "../Components/CFDInfo";
import cfdImg from "../images/cfdImg2.png";
const CFDMetals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Metals</h2>
              <p>
                Metals are physical commodities and they have always played an
                important role in history and will continue to be valued. Metals
                such as Gold and Silver have been recognized as valuable assets
                and have always been a very popular choice of investing.
                Precious metals, especially Gold has always been referred to as
                ‘Safe Heaven' in times of economic uncertainty. Buffet FINANCE
                offers investors, who do not want to face economic turbulence,
                access to three fives of metals: Gold, Silver, Palladium,
                Platinum and Copper.
              </p>
              <div className="button-container">
                <Link to="/allinstrumentsmetals" className="button1">
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
        heading="Trade Different Metals with Buffet FINANCE"
        info="Trade CFDs on five of the major major Metals on the Market  with Buffet FINANCE's Platform."
        button="PRODUCT LIST"
        to="/allinstrumentsmetals"
      />
      {/* Info */}
      <CFDInfo />
    </>
  );
};

export default CFDMetals;
