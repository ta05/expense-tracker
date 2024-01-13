import React, { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenseBox from "./components/IncomeExpenseBox";
import TransactionList from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenseBox />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
