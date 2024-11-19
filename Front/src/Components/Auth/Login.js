import React, { useState, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { GeneralContext } from '../../App'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const { setToken } = useContext(GeneralContext);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1601/users/login', user);
            const token = response.data;
            setToken(localStorage.setItem('token', token));
            toast.success('You are now logged in!');
            navigate('/');
        } catch (err) {
            toast.error('Invalid email or password. Please try again.');
        }
    };
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
                </form>
                </div>
        </div> 
    )
}

export default Login
