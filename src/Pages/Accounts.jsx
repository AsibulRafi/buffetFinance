import React from "react";

const Accounts = () => {
  return (
    <>
      <section className="accountsTypes" id="types">
        <div className="accountsTypes__wrapper">
          <div className="accountsTypes__content">
            <h2>Accounts Types</h2>
            <p>
              We present our customers with an account selection that can
              satisfy each trader’s needs and <br /> preferences. Our team has
              thought about even the smallest of details and produced different{" "}
              <br />
              account types so you can select the one that best suits your
              needs. There are different accounts <br /> to choose from and each
              one has its benefits.
            </p>
            <a href="#" className="accountsTypes__content-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      {/* Account Funding */}
      <section className="accountFunding" id="accFunding">
        <div className="accountFunding__heading">
          <h2>Account Funding</h2>

          <p>There are 3 different ways to fund your Buffet FINANCE Account:</p>
        </div>

        <div className="accountFunding__content">
          <div className="accountFunding__content-cards">
            <div className="accountFunding__content-cards-single">
              <h1>1</h1>
              <h2>Credit Card/Debit Card</h2>
              <p>
                The best way to fund your account is with a credit or debit
                card. The transfer is immediate and secure.
              </p>
              <p>
                Minimum transaction amount $250 with a maximum amount $500.
                Please not your card should be enabled for international
                transactions.
              </p>
            </div>
            <div className="accountFunding__content-cards-single">
              <h1>2</h1>
              <h2>Bank Draft</h2>
              <p>
                You can utilize your banks services and transfer funds using a
                bank draft. Please note that in some cases it might take up to 5
                days for your funds to clear.
              </p>
            </div>
            <div className="accountFunding__content-cards-single">
              <h1>3</h1>
              <h2>Wire Transfer</h2>
              <p>
                Please use the details provided by your Senior Broker. If you
                have online banking you can input the details provided online,
                or visit your bank and fill in the wire transfer form. Please
                remember to provide your Senior Broker the remittance slip.
                Depending on your bank your funds might take up to 5 days to
                clear. As soon as the funds are in your trading account you will
                receive an email notification.
              </p>
            </div>
          </div>
          <div className="accountFunding__content-info">
            <div className="accountFunding__content-info-single">
              <h2>Withdrawing Funds</h2>
              <p>In order to submit a withdrawal request you need to:</p>

              <p>
                Log in to your account in your client area and submit a
                withdrawal request.
              </p>

              <p>
                Your request will be addressed and processed promptly. Usually,
                provided the account is verified the request is process within
                the next 2 business days. Depending on your bank, your funds
                might take longer to appear in your bank account.
              </p>
            </div>
            <div className="accountFunding__content-info-single">
              <h2>Things you should take into account:</h2>
              <p>In order to submit a withdrawal request you need to:</p>
              <div className="accountFunding__content-info-div">
                <i className="fas fa-circle"></i>
                <p>
                  The initial amount invested will be returned through the same
                  method deposited. If the requested amount exceeds the initial
                  invested amount, you need to provide us with the bank account
                  details of an account under your name, in order to receive the
                  excess amount
                </p>
              </div>
              <div className="accountFunding__content-info-div">
                <i className="fas fa-circle"></i>
                <p>
                  For further inquiries regarding funding please contact us on
                  supportNoname1.com or through our live chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accounts;
