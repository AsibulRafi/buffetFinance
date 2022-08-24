import React from "react";

const AccTypes = ({ Info, h2, button }) => {
  if (button) {
    return (
      <div className="accountsTypes__content-single">
        <h2 className="accountsTypes__content-single-heading">{h2}</h2>
        <hr />
        {Info.map((item) => {
          const { id, text } = item;
          return (
            <div className="accountsTypes__content-single-content" key={id}>
              <p>{text}</p>
            </div>
          );
        })}
        <a href="#" className="accountsTypes__button">
          {button}
        </a>
      </div>
    );
  } else {
    return (
      <div className="accountsTypes__content-single">
        <h2 className="accountsTypes__content-single-heading">{h2}</h2>
        <hr />
        {Info.map((item) => {
          const { id, text } = item;
          return (
            <div className="accountsTypes__content-single-content" key={id}>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default AccTypes;
