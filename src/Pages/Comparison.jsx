import React, { useEffect, useState } from "react";
import BronzeAccount from "../Components/Comparison/BronzeAccount";
import SilverAccount from "../Components/Comparison/SilverAccount";
import GoldAccount from "../Components/Comparison/GoldAccount";
import heroImg from "../images/compersion.png";
import { Link } from "react-router-dom";
const Comparison = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const accounts = {
    BronzeAccount: <BronzeAccount />,
    SilverAccount: <SilverAccount />,
    GoldAccount: <GoldAccount />,
  };
  const [selectedAccounts, setSelectedAccounts] = useState("BronzeAccount");
  return (
    <>
      <section className="account__comparison">
        <div className="account__comparison__wrapper">
          <div className="account__comparison-content">
            <div className="account__comparison-content-heading">
              <h2>ACCOUNT COMPARISON</h2>
              <p>
                We present our customers with an account selection that can
                satisfy each trader’s needs and preferences. Our team has
                thought about even the smallest of details and produced
                different account types so you can select the one that best
                suits your needs. There are different accounts to choose from
                and each one has its benefits.
              </p>
            </div>
            <div className="account__comparison-content-img">
              <img src={heroImg} alt="heroImg" />
            </div>
          </div>
          <div className="account__comparison-btn">
            <button
              className={
                selectedAccounts === "BronzeAccount"
                  ? "account__comparison-btn-single fbtn_active"
                  : "account__comparison-btn-single"
              }
              onClick={() => setSelectedAccounts("BronzeAccount")}
            >
              Bronze
            </button>
            <button
              className={
                selectedAccounts === "SilverAccount"
                  ? "account__comparison-btn-single fbtn_active"
                  : "account__comparison-btn-single"
              }
              onClick={() => setSelectedAccounts("SilverAccount")}
            >
              Silver
            </button>
            <button
              className={
                selectedAccounts === "GoldAccount"
                  ? "account__comparison-btn-single fbtn_active"
                  : "account__comparison-btn-single"
              }
              onClick={() => setSelectedAccounts("GoldAccount")}
            >
              Gold
            </button>
          </div>
        </div>
      </section>
      {/* Financial Instrument */}
      <section className="financial">
        <div className="financial__heading">
          <h2>Choose a Financial Instrument</h2>
          <p>
            In this section you can explore all of the assets which are offered
            from our company and their laverages, spreads
            <br /> and commissions per account type.
          </p>
        </div>
        <div className="financial__links">
          <Link to="/allinstrumentsforex" className="financial-link">
            Forex
          </Link>
          <Link to="/allinstrumentsmetals" className="financial-link">
            Metals
          </Link>
          <Link to="/allinstrumentsindices" className="financial-link">
            indices
          </Link>
          <Link to="/allinstrumentsequities" className="financial-link">
            equities
          </Link>
          <Link to="/allinstrumentscryptocurrencies" className="financial-link">
            cryptocurrencies
          </Link>
          <Link to="/allinstrumentsenergies" className="financial-link">
            energies
          </Link>

          <Link to="/allinstrumentscommodities" className="financial-link">
            commodities
          </Link>
        </div>

        <div className="financial-table">{accounts[selectedAccounts]}</div>
      </section>
    </>
  );
};

export default Comparison;
