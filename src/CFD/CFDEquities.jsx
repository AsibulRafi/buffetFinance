import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../Components/BuySell/BuySell";
import CFDDetails from "../Components/CFDDetails";
import CFDInfo from "../Components/CFDInfo";
import cfdImg from "../images/cfdimg4.png";
const CFDEquities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Equities</h2>
              <p>
                Stocks or Equities belong to one of the major asset classes.
                Stocks are significant as they stand for the real value of one's
                stake in a corporation listed in a stock exchange. At Buffet
                FINANCE you can trade 40+ Stock CFDs that are traded in world
                major equity markets, such as Apple, Microsoft, Alibaba and
                Amazon. Dividends Adjustments on Stocks CFDs CFDs on stocks are
                subject to dividend adjustments. When a stock security pays
                dividend to its shareholders, dividend adjustments will be made
                to the trading accounts of clients who hold a position on the
                Stock.
              </p>{" "}
              <h3>With Buffet FINANCE you can:</h3>
              <ul>
                <li>
                  Long Positions (Buy) – Clients holding long positions on the
                  ex-div date will receive a dividend in the form of a cash
                  adjustment (CD) s
                </li>
                <li>
                  Short Positions (Sell) – Clients holding short positionson the
                  ex-div date will be charged the dividend amount in the form of
                  a cash adjustment (CW)
                </li>
              </ul>
              <div className="button-container">
                <Link to="/allinstrumentsequities" className="button1">
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
        heading="Trade Different  Equities with Buffet FINANCE"
        info="Trade CFDs on 40+ Stock CFDs that are traded in world major equity markets, such as Apple, Microsoft, Alibaba and Amazon with Buffet FINANCE's Platform.     "
        button="PRODUCT LIST"
        to="/allinstrumentsequities"
      />
      {/* Info */}
      <CFDInfo />
    </>
  );
};

export default CFDEquities;
