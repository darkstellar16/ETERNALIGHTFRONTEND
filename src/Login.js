import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    props.sendMail(email);
    
    axios.post('http://localhost:9000/login', data)
      .then(response => {
        const {user} = response.data;
        localStorage.setItem('token',user.token);
        window.location.href = '/dashboard';
      })
      .catch(error => {
        console.error(error);
        alert('Invalid email or password');
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;