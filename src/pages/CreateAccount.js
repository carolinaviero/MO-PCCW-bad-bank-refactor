import React, { useState, useContext } from 'react';
import { UserContext, CustomCard as Card } from '../context'
import SuccessMsg from '../components/SuccessMsg'

const CreateAccount = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');

  return (
        <Card
        bgcolor="secondary"
        header="Login"
        status={status}
        body={show ? 
          <CreateForm setShow={setShow} setStatus={setStatus} /> : 
          <SuccessMsg label="Add another account" onClick={() => setShow(true)} />}
    />
  );
}

const CreateForm = ({ setShow, setStatus }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(UserContext);

  const handle = () => {
    console.log(name, email, password);
    context.users.push({ name, email, password, balance: 0 });
    setShow(false);
    setStatus('Account created successfully');
  }

  return (
    <>
      <label>Name</label><br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.currentTarget.value)} /><br />

      <label>Email address</label><br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)} /><br />

      <label>Password</label><br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)} /><br />

      <button
        type="submit"
        className="btn btn-light"
        onClick={handle}>
        Create Account
      </button>
    </>
  );
}

export default CreateAccount;
