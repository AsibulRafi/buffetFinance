import React from "react";
import { Link } from "react-router-dom";

const Indices = () => {
  return (
    <section className="allInstruments">
      <div className="allInstruments__wrapper">
        <div className="allInstruments__heading">
          <h2>
            All <br />
            instruments
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
            <div className="allInstruments__content-link__active">
              <Link to="/allinstrumentsindices">indices</Link>
              <i className="fas fa-arrow-right"></i>
            </div>

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
            <Link
              to="/allinstrumentsenergies"
              className="allInstruments__content-link"
            >
              energies
            </Link>
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
                  <th>Contract Size</th>
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
                  <td>DJCUSD.c</td>
                  <td>Dow Jones 30 Cash Index</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-1444</td>
                  <td>-3536</td>
                  <td>Mon-Fri 01:00-23:15</td>
                </tr>
                <tr>
                  <td>AXCAUD.c</td>
                  <td>Australia 200 Cash Index</td>
                  <td>AUD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-68.673</td>
                  <td>-12.651</td>
                  <td>Mon-Fri 00:50-07:30, 08:10-23:00</td>
                </tr>
                <tr>
                  <td>GECEUR.c</td>
                  <td>Germany 40 Cash index</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-95</td>
                  <td>-1035</td>
                  <td>Mon-Fri 09:00-23:30</td>
                </tr>
                <tr>
                  <td>ES35</td>
                  <td>Spain 35 Cash Index</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-56.325</td>
                  <td>-77.142</td>
                  <td>Mon-Fri 09:00-21:00</td>
                </tr>
                <tr>
                  <td>FRCEUR.c</td>
                  <td>France 40 Cash Index</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-30.431</td>
                  <td>-41.675</td>
                  <td>Mon-Fri 09:00-23:30</td>
                </tr>
                <tr>
                  <td>JPCJPY.c</td>
                  <td>JPN225 Cash Index</td>
                  <td>JPY</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-1000</td>
                  <td>-1000</td>
                  <td>Mon-Fri 01:00-24:00</td>
                </tr>
                <tr>
                  <td>N25</td>
                  <td>Netherlands 25 Cash Index</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-3.179</td>
                  <td>-4.292</td>
                  <td>Mon-Fri 09:00-23:00</td>
                </tr>
                <tr>
                  <td>EXCEUR.c</td>
                  <td>Euro 50 Cash index</td>
                  <td>EUR</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-19.737</td>
                  <td>-27.029</td>
                  <td>Mon-Fri 09:00-23:00</td>
                </tr>
                <tr>
                  <td>SWI20</td>
                  <td>Switzerland 20 Cash index</td>
                  <td>CHF</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-41.833</td>
                  <td>-78.837</td>
                  <td>Mon-Fri 09:00-23:00</td>
                </tr>
                <tr>
                  <td>NACUSD.c</td>
                  <td>NAS100 Cash Index</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-108.410000</td>
                  <td>-100.940000</td>
                  <td>Mon-Fri 01:00-23:15</td>
                </tr>
                <tr>
                  <td>SPCUSD.c</td>
                  <td>SPX500 Cash Index</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-31.905</td>
                  <td>-4.95</td>
                  <td>Mon-Fri 01:00-23:15</td>
                </tr>
                <tr>
                  <td>UKCGBP.c</td>
                  <td>UK 100 Cash Index</td>
                  <td>GBP</td>
                  <td>Number of Contracts * Market Price*1</td>
                  <td>1 Lot = 1 Index Price</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-79.095</td>
                  <td>-12.297</td>
                  <td>Mon-Fri 01:00-23:15</td>
                </tr>
                <tr>
                  <td>VIX.C</td>
                  <td>Volatility Index</td>
                  <td>USD</td>
                  <td>Number of Contracts * Market Price * 100</td>
                  <td>1Lot = 100 Index</td>
                  <td>1 lot</td>
                  <td>200 Lots</td>
                  <td>1</td>
                  <td>-8</td>
                  <td>-8</td>
                  <td>Mon-Fri 01:00-23:15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indices;
