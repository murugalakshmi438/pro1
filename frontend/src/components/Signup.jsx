import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input type="text" name="username" onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}
