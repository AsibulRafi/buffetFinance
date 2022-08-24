import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../Components/BuySell/BuySell";
import CFDDetails from "../Components/CFDDetails";
import CFDInfo from "../Components/CFDInfo";
import cfdImg from "../images/cfdImg3.png";
const CFDIndices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Indices</h2>
              <p>
                An index is a statistical representation of an equity market
                through a basket of stocks. An index measures the value of a
                group of stocks and therefore investors can invest on indices
                that represent specific markets. With Buffet FINANCE you can
                trade more than 10 of the world's most prolific indices covering
                Asia, North America and Europe, including the renowned Dow Jones
                Industrial Average (DJIA) which is extremely popular with
                traders worldwide. Dividend Adjustments on Cash Indices CFDs
                CFDs on Indices will be subject to dividend adjustments. When a
                constituent member of an index pays Dividends to its
                Shareholders, dividend adjustments will be made to accounts of
                clients holding a position on the index.
              </p>
              <div className="button-container">
                <Link to="/allinstrumentsindices" className="button1">
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
        heading="Trade Different Indices with
Buffet FINANCE"
        info="Trade CFDs on different Indices on the Market with Buffet FINANCE's Platform including Nasdaq and Dow Jones.   "
        button="PRODUCT LIST"
        to="/allinstrumentsindices"
      />
      {/* Info */}
      <CFDInfo />
    </>
  );
};

export default CFDIndices;
