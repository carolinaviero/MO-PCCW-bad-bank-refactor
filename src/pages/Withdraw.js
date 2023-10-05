import React, { useState, useContext } from 'react';
import { UserContext, CustomCard as Card } from '../context'
import SuccessMsg from '../components/SuccessMsg'

const Withdraw = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');

  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      status={status}
      body={show ?
        <WithdrawForm setShow={setShow} setStatus={setStatus} /> :
        <SuccessMsg label="Withdraw again" onClick={() => setShow(true)} />}
    />
  );
};

const WithdrawForm = ({ setShow, setStatus }) => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const context = useContext(UserContext);

  const handle = () => {
    console.log(email, amount);
    const user = context.users.find((user) => user.email === email);

    if (!user) {
      return setStatus('User not found.');
    }

    user.balance = user.balance - Number(amount);
    setStatus('');
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
        onChange={e => setEmail(e.currentTarget.value)} /><br />

      Amount<br />
      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={e => setAmount(e.currentTarget.value)} /><br />

      <button
        type="submit"
        className="btn btn-light"
        onClick={handle}>Withdraw</button>
    </>
  );
};

export default Withdraw;
