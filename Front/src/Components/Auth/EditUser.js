import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { validateForm } from './ValidateEdit';
import { GeneralContext } from '../../App';

const EditUser = () => {
    const [errors, setErrors] = useState({});
    const { theUser } = useContext(GeneralContext);
    const [user, setUser] = useState({
        name: {
            first: '',
            last: '',
            middle: '',
        },
        phone: '',
        email: '',
        image: {
            url: '',
            alt: '',
        },
        address: {
            state: '',
            country: '',
            city: '',
            street: '',
            houseNumber: '',
            zip: '',
        },
    });

    const navigate = useNavigate();
    const id = theUser?._id;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get(`http://localhost:1601/users/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                    },
                });

                const cleanedData = { ...data };
                delete cleanedData._id;
                delete cleanedData.isAdmin;
                delete cleanedData.__v;
                delete cleanedData.loginAttempts;
                delete cleanedData.lockUntil;

                if (cleanedData.image && cleanedData.image._id) {
                    delete cleanedData.image._id;
                }
                if (cleanedData.address && cleanedData.address._id) {
                    delete cleanedData.address._id;
                }
                if (cleanedData.name && cleanedData.name._id) {
                    delete cleanedData.name._id;
                }

                setUser(cleanedData);
            } catch (err) {
                toast.error('Failed to fetch user data.');
                console.error(err);
            }
        };

        fetchUser();
    }, [id]);

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

        if (validateForm(user, setErrors)) {
            try {
                const cleanedUser = { ...user };

                delete cleanedUser._id;
                delete cleanedUser.isAdmin;
                delete cleanedUser.__v;
                delete cleanedUser.loginAttempts;
                delete cleanedUser.lockUntil;

                if (cleanedUser.image && cleanedUser.image._id) {
                    delete cleanedUser.image._id;
                }
                if (cleanedUser.address && cleanedUser.address._id) {
                    delete cleanedUser.address._id;
                }
                if (cleanedUser.name && cleanedUser.name._id) {
                    delete cleanedUser.name._id;
                }


                await axios.put(`http://localhost:1601/users/${id}`, cleanedUser, {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                    },
                });

                toast.success('User updated successfully!');
                navigate('/');
            } catch (err) {
                if (err.response && err.response.data && err.response.data.message) {
                    setErrors(err.response.data);
                } else {
                    setErrors({ general: err.message });
                }
                toast.error('Failed to update user.');
            }
        }
    };

    return (
        <div className="edit-user container d-flex justify-content-center align-items-center vh-100"
        style={{marginTop: '10%', marginBottom: '10%'}}>
            <div className="card p-4 shadow mt-5" style={{ maxWidth: '600px', width: '100%' }}>
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <h5>Name</h5>
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label htmlFor="name.first">First Name</label>
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
                        <div className="col-md-4">
                            <label htmlFor="name.middle">Middle Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name.middle"
                                placeholder="Optional"
                                value={user.name.middle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="name.last">Last Name</label>
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

                    <h5>Profile Image</h5>
                    <div className="form-group mb-3">
                        <label htmlFor="image.url">Image URL</label>
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
                    <div className="form-group mb-3">
                        <label htmlFor="image.alt">Image Alt Text</label>
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

                    <h5>Address</h5>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="address.state">State</label>
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
                            <label htmlFor="address.country">Country</label>
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
                            <label htmlFor="address.city">City</label>
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
                            <label htmlFor="address.street">Street</label>
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
                            <label htmlFor="address.houseNumber">House Number</label>
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
                            <label htmlFor="address.zip">Zip Code</label>
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

                    {Object.keys(errors).map((key) => (
                        <div key={key} className="alert alert-danger">{errors[key]}</div>
                    ))}

                    <button type="submit" className="btn btn-primary w-100">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
