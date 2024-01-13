import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    function generateID() {
        return Math.floor(Math.random() * 10000000);
    }
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const transaction = {
            id: generateID(),
            text,
            amount: parseFloat(amount),
        };
        addTransaction(transaction);
    };

    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        id="text"
                        placeholder="Enter text..."
                        value={text}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br /> (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
