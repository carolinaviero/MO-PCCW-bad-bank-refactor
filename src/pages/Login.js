import React, { useState, useContext } from 'react';
import { UserContext, CustomCard as Card } from '../context'
import SuccessMsg from '../components/SuccessMsg'

const Login = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus} /> : 
        <SuccessMsg label="Authenticate again" onClick={() => setShow(true)} />}
    />
  );
};

const LoginForm = ({ setShow, setStatus }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(UserContext);

  const handle = () => {
    const user = context.users.find((user) => user.email === email);

    console.log(user, email, password);

    if (!user) {
      return setStatus('Wrong password or email.');
    }

    if (user.password === password) {
      setStatus('');
      return setShow(false);
    }

    return setStatus('Wrong password or email.');
  };

  return (
    <>
      Email<br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      /><br />

      Password<br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      /><br />

      <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
    </>
  );
};

export default Login;
