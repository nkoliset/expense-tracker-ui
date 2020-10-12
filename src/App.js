import React from 'react';
import { Header } from './components/Header';
import './App.css';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { IncomeExpense } from './components/IncomeExpense';



function App() {
  return (
    <GlobalProvider>
      //Header information
      <Header />      
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
