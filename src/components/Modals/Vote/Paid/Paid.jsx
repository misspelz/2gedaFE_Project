import React, { useState } from "react";
import "./styles.css";
import ActionButton from "../../Commons/Button";

const Paid = () => {
  const [paidVotes, setPaidVotes] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  const handlePaidVotesChange = (event) => {
    const selectedVotes = event.target.value;
    setPaidVotes(selectedVotes);
    validateInput(selectedVotes, amount, currency);
  };

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);
    validateInput(paidVotes, amount, selectedCurrency);
  };

  const handleAmountChange = (event) => {
    const enteredAmount = event.target.value;
    setAmount(enteredAmount);
    validateInput(paidVotes, enteredAmount, currency);
  };

  const validateInput = (votes, amt, cur) => {
    const isValidVotes = /^\d+$/.test(votes) && parseInt(votes, 10) > 0;
    const isValidAmount = /^\d+(\.\d{1,2})?$/.test(amt) && parseFloat(amt) >= 0;

    setErrors({
      paidVotes: isValidVotes ? "" : "Please enter a valid number.",
      amount: isValidAmount ? "" : "Please enter a valid amount.",
    });
  };

  return (
    <div className="paidCon">
      <p
        style={{ fontSize: "16px", textAlign: "start", paddingBottom: "20px" }}
      >
        This is a paid poll, your contribution ensures meaningful insights.
        Participate now to support quality content and exclusive results
      </p>
      <div className="cash">
        <div className="num">
          <input
            type="number"
            className=""
            style={{ border: "none", outline: "none" }}
            value={paidVotes}
            onChange={handlePaidVotesChange}
            placeholder="Number of paid votes"
          />
          {errors.paidVotes && (
            <div style={{ color: "red" }}>{errors.paidVotes}</div>
          )}
        </div>

        <div className="amt">
          <div className="num" style={{ display: "flex" }}>
            <select
              className=""
              style={{ border: "none", outline: "none", padding: "10px" }}
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
            </select>

            <div className="">
              <input
                type="text"
                className=""
                style={{ border: "none", outline: "none" }}
                value={amount}
                onChange={handleAmountChange}
                placeholder="Amount"
              />
            </div>
            {errors.amount && (
              <div style={{ color: "red" }}>{errors.amount}</div>
            )}
          </div>
        </div>
      </div>

      <div
        className="btn-continu"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <ActionButton label={"Go back"} bg={"ma-d"} type={"submit"} />
        <ActionButton label={"Proceed to pay"} bg={"purple"} type={"submit"} />
      </div>
    </div>
  );
};

export default Paid;
