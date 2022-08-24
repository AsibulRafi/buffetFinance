import React from "react";
import Button from "../Components/Button/Button";
import BuySell from "../Components/BuySell/BuySell";
import Experience from "../Components/Experience/Experience";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div className="hero__content-text">
              <h2>
                <span>BuffetFINANCE </span>
                is the Best Way <br />
                to Start the Trade
              </h2>
              <Button button1="Real Account" button2="Open Account" />
            </div>
          </div>
        </div>
      </section>
      {/*  Experience */}
      <Experience />

      {/* BUY and Sell */}
      <BuySell />

      {/* Take Control */}
      <section className="take__control">
        <div className="take__control-content">
          <h2 className="take__control-content-heading">Take Control</h2>
          <div className="take__control-content__infos">
            {/* Take Control Info */}
            <div className="take__control-content__info">
              <h2>1</h2>
              <h4>
                Stop Limit/ Stop <br />
                Loss /Trailing Stop
              </h4>
            </div>
            <div className="take__control-content__info">
              <h2>2</h2>
              <h4>
                Alerts on price movements,
                <br /> including % of change;
                <br /> Traders’ Sentiments etc
              </h4>
            </div>
            <div className="take__control-content__info">
              <h2>3</h2>
              <h4>
                Negative Balance
                <br /> Protection
              </h4>
            </div>
            <div className="take__control-content__info">
              <h2>4</h2>
              <h4>
                {" "}
                Free email & push notifications on <br />
                the market events
              </h4>
            </div>
          </div>
          <Button button1="Real Account" button2="Open Account" />
        </div>
      </section>

      {/* Get More */}
      <section className="getMore">
        <div className="getMore-content">
          <h2 className="getMore-content-heading">Get More</h2>
          <div className="getMore-content__infos">
            {/* Get More Info */}
            <div className="getMore-content__info">
              <h4>
                Trade CFDs on Forex, Metals, Cryptocurrencies, Enrgies and
                <br />
                many more instruments on the Market!
              </h4>
            </div>
          </div>
          <Button button1="Real Account" button2="Open Account" />
        </div>
      </section>
    </>
  );
};

export default Home;
