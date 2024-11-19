import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { validateForm } from './Validate';

const Signup = () => {
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        name: {
            first: '',
            last: '',
            middle: ''
        },
        phone: '',
        email: '',
        password: '',
        image: {
            url: '',
            alt: ''
        },
        address: {
            state: '',
            country: '',
            city: '',
            street: '',
            houseNumber: '',
            zip: ''
        },
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        const [mainKey, subKey] = id.split('.');
    
        setUser((prevState) => {
            if (subKey) {
                return {
                    ...prevState,
                    [mainKey]: {
                        ...prevState[mainKey],
                        [subKey]: value,
                    },
                };
            } else {
                return {
                    ...prevState,
                    [id]: value,
                };
            }
        });
    };
        
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(validateForm(user, setErrors)){
            try {
                await axios.post('http://localhost:1601/users', user);
                toast.success('Signup successful!');
                navigate('/login');
            } catch (err) {
                if (err.response && err.response.data && err.response.data.message) {
                    setErrors(err.response.data);
                } else {
                    setErrors({ general: err.response.data });
                }
                toast.error('Signup failed. Please check your details and try again.');
            }
        }
    };
    
    return (
        <div className="signup container d-flex justify-content-center align-items-center vh-100"
        style={{marginTop: '15%', marginBottom: '15%'}}>
        <div className="card p-4 shadow mt-5" style={{ maxWidth: '600px', width: '100%' }}>
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>

                <h5>Name</h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name.first"
                            placeholder="Enter first name"
                            value={user.name.first}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="middleName">Middle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name.middle"
                            placeholder="Enter middle name (optional)"
                            value={user.name.middle}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name.last"
                            placeholder="Enter last name"
                            value={user.name.last}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <h5>Contact Information</h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="email">Email</label>
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

                    <div className="col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                            value={user.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <h5>Address</h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address.state"
                            placeholder="Enter state"
                            value={user.address.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address.country"
                            placeholder="Enter country"
                            value={user.address.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address.city"
                            placeholder="Enter city"
                            value={user.address.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address.street"
                            placeholder="Enter street"
                            value={user.address.street}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="houseNumber">House Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address.houseNumber"
                            placeholder="Enter house number"
                            value={user.address.houseNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="zip">Zip Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address.zip"
                            placeholder="Enter zip code"
                            value={user.address.zip}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <h5>Profile Image</h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="imageUrl">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image.url"
                            placeholder="Enter image URL"
                            value={user.image.url}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="imageAlt">Image Alt Text</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image.alt"
                            placeholder="Enter image alt text"
                            value={user.image.alt}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <h5>Password</h5>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {Object.keys(errors).map((key) => (
                    <div key={key} className="alert alert-danger">{errors[key]}</div>
                ))}
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
        </div>
    </div>    
    );
};

export default Signup;
