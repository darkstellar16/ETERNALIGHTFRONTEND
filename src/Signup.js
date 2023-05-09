import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  

  function handleSubmit(event) {
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   alert('Passwords do not match');
    //   return;
    // }

    const data = {
      email: email,
      password: password,
      name:name,
      mobile:number,
      address:address
    };
    const options = {
      headers:{"content-type":"application/x-www-form-urlencoded"
      }
    }

    axios.post('http://localhost:9000/register', data,options)
      .then(response => {
        alert('Registration successful');
        window.location.href = '/';
      })
      .catch(error => {
        console.error(error);
        alert('Registration fail');
      });
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>

        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <label>
          Mobile No:
          <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
        </label>

        <label>
          Address
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
        </label>

      
       
        <button type="submit">Register</button>
      </form>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Register;