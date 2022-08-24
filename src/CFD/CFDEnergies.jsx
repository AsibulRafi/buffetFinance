import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../Components/BuySell/BuySell";
import CFDDetails from "../Components/CFDDetails";
import CFDInfo from "../Components/CFDInfo";
import cfdImg from "../images/cfdimg6.png";
const CFDEnergies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Energies</h2>
              <p>
                Oil and gas are the two most popular commodities. They are
                traded in heavy volumes around the clock offering multiple
                opportunities to online traders. Whether it is US Crude Oil
                (WTI), Brent Oil (Brent) or Natural Gas (NATGAS.f), energy
                commodities are quoted in USD. At Buffet FINANCE you can trade 3
                CFDs on energies such as Crude Oil, Brent Oil and Natural Gas,
                with very favour able terms.
              </p>
              <div className="button-container">
                <Link to="/allinstrumentsenergies" className="button1">
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
        heading="Trade Different Energies with
Buffet FINANCE"
        info="Trade 3 CFDs on energies such as Crude Oil, Brent Oil and Natural Gas, with very favour able terms on Buffet FINANCE's Trading Platform."
        button="PRODUCT LIST"
        to="/allinstrumentsenergies"
      />
      {/* Info */}
      <CFDInfo />
    </>
  );
};

export default CFDEnergies;
