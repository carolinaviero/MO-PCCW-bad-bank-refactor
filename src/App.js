import React, { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Balance from './pages/Balance';
import AllData from './pages/AllData';

const UserContext = createContext(null);

const App = () => {
  const initialUserValue = {
    users: [
      {
        name: 'abel',
        email: 'abel@mit.edu',
        password: 'secret',
        balance: 100,
      },
    ],
  };

  return (
    <div>
      <UserContext.Provider value={initialUserValue}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/alldata" element={<AllData />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export { App, UserContext };
