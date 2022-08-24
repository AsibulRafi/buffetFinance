import React from "react";
import { Link } from "react-router-dom";

const Energies = () => {
  return (
    <section className="allInstruments">
      <div className="allInstruments__wrapper">
        <div className="allInstruments__heading">
          <h2>
            All
            <br /> instruments
          </h2>

          <p>
            Below you can find the list of all available media for transactions
            with our CFD service.
          </p>
        </div>
        <div className="allInstruments__content">
          <div className="allInstruments__content-links">
            <Link
              to="/allinstrumentsforex"
              className="allInstruments__content-link"
            >
              Forex
            </Link>
            <Link
              to="/allinstrumentsmetals"
              className="allInstruments__content-link"
            >
              Metals
            </Link>
            <Link
              to="/allinstrumentsindices"
              className="allInstruments__content-link"
            >
              indices
            </Link>
            <Link
              to="/allinstrumentsequities"
              className="allInstruments__content-link"
            >
              equities
            </Link>

            <Link
              to="/allinstrumentscryptocurrencies"
              className="allInstruments__content-link"
            >
              cryptocurrencies
            </Link>
            <div className="allInstruments__content-link__active">
              <Link to="/allinstrumentsenergies">energies</Link>
              <i className="fas fa-arrow-right"></i>
            </div>
            <Link
              to="/allinstrumentscommodities"
              className="allInstruments__content-link"
            >
              commodities
            </Link>
          </div>
          <div className="allInstruments__table">
            <table className="allInstruments__table-content">
              <thead className="allInstruments__table-content-heading">
                <tr>
                  <th>Symbols</th>
                  <th>Description</th>
                  <th> Currency</th>
                  <th>Nominal Volume</th>
                  <th>Minimum Volume</th>
                  <th>Maximum Volume</th>
                  <th>Volume Step</th>
                  <th>Swap Long In Points</th>
                  <th>Swap Short In Points</th>
                  <th>Trading Hours (Server Time)*</th>
                </tr>
              </thead>
              <tbody className="allInstruments__table-content-body">
                <tr>
                  <td>USOIL.c</td>
                  <td>Crude Oil Brent Cash</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1 Barrel</td>
                  <td>10 Lot</td>
                  <td>10000 Lots</td>
                  <td>1</td>
                  <td>-21.800000</td>
                  <td>-15.890000</td>
                  <td>Mon-Fri 01:00-23:58</td>
                </tr>
                <tr>
                  <td>UKOIL.c</td>
                  <td>West Texas Intermediate Crude Oil cash</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1 Barrel</td>
                  <td>10 Lot</td>
                  <td>10000 Lots</td>
                  <td>1</td>
                  <td>-17.34</td>
                  <td>-26.00</td>
                  <td>Mon-Fri 03:00-23:58</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Energies;
