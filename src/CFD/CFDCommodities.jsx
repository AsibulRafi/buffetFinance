import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../Components/BuySell/BuySell";

import CFDDetails from "../Components/CFDDetails";
import CFDInfo from "../Components/CFDInfo";
import cfdImg from "../images/cfdimg5.png";
const CFDCommodities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Commodities</h2>
              <p>
                Commodity markets have had a major impact on nations and people
                throughout history. Currently there are about 50 major commodity
                markets worldwide that facilitate trading of approximately 100
                raw or primary products. There are different categories of
                commodities, all supported by the same basic economic
                principles: lower supply equals higher prices and vice versa. At
                Buffet FINANCE you can trade up to 3 CFDs on Commodities such as
                COCOA, COFFEE and SOYBEAN with very favour able terms.
              </p>
              <div className="button-container">
                <Link to="/allinstrumentscommodities" className="button1">
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
        heading="Trade Different Commodities with Buffet FINANCE"
        info="With Buffet FINANCE you can trade up to 3 CFDs on Commodities such as COCOA, COFFEE and SOYBEAN with very favour able terms."
        button="PRODUCT LIST"
        to="/allinstrumentscommodities"
      />

      {/* Info */}
      <CFDInfo />
    </>
  );
};

export default CFDCommodities;
