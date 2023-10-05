import React, { useState, useContext } from 'react';
import { UserContext, CustomCard as Card } from '../context';
import SuccessMsg from '../components/SuccessMsg'

const Balance = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus} /> :
        <SuccessMsg label="Check balance again" onClick={() => setShow(true)} />}
    />
  );
};

const BalanceForm = ({ setShow, setStatus }) => {
  const [email, setEmail] = useState('');
  const context = useContext(UserContext);

  const handle = () => {
    const user = context.users.find((user) => user.email === email);

    if (!user) {
      return setStatus('User not found.');
    }

    console.log(user);

    if (typeof user.balance === 'number') {
      setStatus(`Your balance is: $${user.balance}`);
    } else {
      setStatus('Something went wrong.');
    }

    setShow(false);
  };

  return (
    <>
      Email<br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)} /><br />

      <button
        type="submit"
        className="btn btn-light"
        onClick={handle}>
        Check Balance
      </button>
    </>
  );
};

export default Balance;
