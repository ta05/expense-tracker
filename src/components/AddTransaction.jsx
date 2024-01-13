import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import "../styles/AddTransaction.css";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [isExpense, setIsExpense] = useState(false);
    const { addTransaction } = useContext(GlobalContext);

    function generateID() {
        return Math.floor(Math.random() * 10000000);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(parseFloat(event.target.value));
    };

    const handleRadioChange = (event) => {
        setIsExpense(event.target.value === "expense");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const transaction = {
            id: generateID(),
            text,
            amount: isExpense ? -amount : amount,
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
                    <label htmlFor="type">Type</label>
                    <div className="flex items-center me-4">
                        <input
                            id="inline-radio"
                            type="radio"
                            value="income"
                            name="inline-radio-group"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={handleRadioChange}
                            checked={!isExpense}
                        />
                        <label
                            htmlFor="inline-radio"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Income
                        </label>
                    </div>
                    <div className="flex items-center me-4">
                        <input
                            id="inline-2-radio"
                            type="radio"
                            value="expense"
                            name="inline-radio-group"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={handleRadioChange}
                            checked={isExpense}
                        />
                        <label
                            htmlFor="inline-2-radio"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Expense
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
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
