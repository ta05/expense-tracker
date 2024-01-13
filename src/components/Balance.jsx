import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const balance = transactions
        .reduce((acc, curr) => acc + curr.amount, 0)
        .toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </>
    );
};

export default Balance;
