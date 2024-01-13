import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import "../styles/Transaction.css";

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const formatSign = (amount, option1, option2) => {
        return amount < 0 ? option1 : option2;
    };

    const handleDeletion = () => {
        deleteTransaction(transaction.id);
    };

    return (
        <li className={formatSign(transaction.amount, "minus", "plus")}>
            {transaction.text}{" "}
            <span>
                {formatSign(transaction.amount, "-", "+")}$
                {Math.abs(transaction.amount)}
            </span>
            <button onClick={handleDeletion} className="delete-btn">
                x
            </button>
        </li>
    );
};

export default Transaction;
