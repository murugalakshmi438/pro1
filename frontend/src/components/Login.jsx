import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      alert('Login successful. Token: ' + res.data.token);
    } catch (err) {
      alert(err.response.data.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" name="username" onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
