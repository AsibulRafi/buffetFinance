import React, { useEffect } from "react";
import Button from "../Components/Button/Button";
import webTrade from "../images/webTrade.png";
const WebTrade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="webTrader">
        <div className="webTrader__wrapper">
          <h2 className="webTrader__heading">Buffet FINANCE's Web Trader</h2>
          <div className="webTrader__content">
            <div className="webTrader__content-text">
              <h2>Web Trader</h2>
              <p>
                Buffet FINANCE is providing a new web based trading platform
                that runs on both PC and Mac. This platform, broadens our reach
                and addresses some ongoing needs of our clients who require a
                stable and flexible trading solution to access global forex
                markets. Our web Trader has been built with one purpose in mind
                and that's to improve the trading experience of our clients.
              </p>
              <Button button1="Real Account" button2="Demo Account" />
            </div>
            <div className="webTrader__content-img">
              <img src={webTrade} alt="webTrade" />
            </div>
          </div>
        </div>
      </section>
      <div className="webTrader-details">
        <h2>Key Feature Included:</h2>
        <div className="webTrader-details-flex">
          <ul>
            <li>Works with any browser</li>
            <li>No downloads, Flash or Java required</li>
            <li>You will keep your MT4 login and password</li>
            <li>Trade directly from the chart</li>
            <li>Multi-language support</li>
            <li>View aggregated positions</li>
            <li>Advanced "Close All" functionality</li>
            <li>Real-time quotes and execution</li>
            <li>Fully synchronized with MT4</li>
            <li>Dynamic order routing</li>
          </ul>
          <ul>
            <li>
              You can filter instruments using keyword or securities group or
              set your own asset classes
            </li>
            <li>
              By just optimizing the smart one-click trading mode, traders can
              set size, TP/SL, and also open orders with exceptional speed.
            </li>
            <li>
              You can choose any instrument by clicking on the star: view them
              easily by selecting instruments group “Favorite”
            </li>
            <li>
              ChartDock gives traders the ability to analyze up to 10 charts
              simultaneously. Charts can either be manually arranged or
              automatically arranged at the click of a button.
            </li>
            <li>
              Excellent HTML5 charting which includes five chart types, vector
              drawings, and 100+ studies.
            </li>
            <li>
              The summary tab shows traders aggregated positions grouped by
              symbol, allowing users to clearly see total P/L recorded for a
              particular instrument.
            </li>
            <li>
              Keep your eyes on the market trend and your open positions at the
              same time! Open and close trades directly from the chart.
            </li>
            <li>
              With advanced ‘Close All’ control, traders can close any
              transaction: profitable, losing, buy, sell and open positions with
              just one click.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WebTrade;
