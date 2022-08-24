import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/logoWhite.png";
import ssl from "../images/ssl.png";
import cloud from "../images/cloud.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <Link to="/" className="footer__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="footer__icons">
          <div className="footer__payment">
            <h2>Website Secured With:</h2>
            <div>
              <img src={ssl} alt="ssl" />
              <img src={cloud} alt="cloud" />
            </div>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__links-1">
            <h4>ABOUT US</h4>
            <ul className="footer__links-list">
              <li>
                <Link to="/about#about">About US</Link>
              </li>
              <li>
                <Link to="/about#contact">Contact US</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-2">
            <h4>Trading</h4>
            <ul className="footer__links-list">
              <li>
                <Link to="/Forex">CFDs on Forex</Link>
              </li>
              <li>
                <Link to="/Metals">CFDs on Metals</Link>
              </li>
              <li>
                <Link to="/Indices">CFDs Indices</Link>
              </li>
              <li>
                <Link to="/Equities">CFDs on Equities</Link>
              </li>
              <li>
                <Link to="/Cryptocurrencies">CFDs Cryptocurrencies</Link>
              </li>
              <li>
                <Link to="/Energies">CFDs on Energies</Link>
              </li>
              <li>
                <Link to="/Commodities">CFDs on Commodities</Link>
              </li>
              <li>
                <Link to="/commissions"> Commissions and swaps</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-3">
            <h4>ACCOUNTS</h4>
            <ul className="footer__links-list">
              <li>
                <Link to="/accounts#types">Account types</Link>
              </li>
              <li>
                <Link to="/accounts#accFunding">Account Funding</Link>
              </li>
              <li>
                <Link to="/comparison">Account Comparison</Link>
              </li>
              <li>
                <Link to="/kyc">KYC Guide</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-4">
            <h4>Tools</h4>
            <ul className="footer__links-list">
              <li>
                <Link to="/tools#tradingglossary">Trading Glossary</Link>
              </li>
              <li>
                <Link to="/tools#economical">Economical Calendar</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__info">
          <h4 className="footer__info-header">RISK WARNING</h4>
          <div className="footer__info-text">
            <p>
              Trading in Forex and CFDs carries a high level of risk and can
              result in the loss of part or all of your investment. Trading in
              Forex and CFDs may not be appropriate for all investors. You
              should be aware of all the risks associated with Forex and CFD
              trading and seek for independent advice. Past performance does not
              constitute a reliable indication of future results. Forecasts for
              the future do not constitute a reliable indicator of future
              performance. Copyright for the pages and for the screens
              displaying the pages, and for the information, material and their
              arrangement, is owned by Buffet FINANCE all rights reserved.
            </p>
            <p>
              This information is intended for investors outside the United
              States who are not US/Japanese citizens and residents. This
              website is intended for informational purposes only. This website
              is not directed at any jurisdiction and is not intended for any
              use that would be contrary to local law or regulation. The
              products described on this are not offered and may not be sold in
              the United States/Japan or to US/Japanese citizens and residents.
            </p>
          </div>
        </div>

        <div className="copyright">
          <p>
            Copyright @ 2022 Buffet FIN <br /> All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
