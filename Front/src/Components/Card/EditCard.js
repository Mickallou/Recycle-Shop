import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { validateForm } from './ValidateCard';

const EditCard = () => {
    const [errors, setErrors] = useState({});
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        phone: '',
        image: {
            url: [''],
            alt: ''
        },
        address: {
            state: '',
            country: '',
            city: '',
            street: '',
            houseNumber: '',
            zip: ''
        }
    });

    const navigate = useNavigate();
    const { id } = useParams(); 

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:1601/products/${id}`, {
                    headers: {
                        'Authorization': localStorage.getItem('token'),
                    },
                });

                const cleanedData = { ...data };

                delete cleanedData._id;
                delete cleanedData.buyer;
                delete cleanedData.seller;
                delete cleanedData.sold;
                delete cleanedData.date;
                delete cleanedData.__v;

                if (cleanedData.image && cleanedData.image._id) {
                    delete cleanedData.image._id; 
                }
                if (cleanedData.address && cleanedData.address._id) {
                    delete cleanedData.address._id; 
                }

                setProduct(cleanedData);
            } catch (err) {
                toast.error('Failed to fetch product data.');
                console.error(err);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        const [mainKey, subKey] = id.split('.');

        setProduct((prevState) => {
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

        if (validateForm(product, setErrors)) {
            try {
                const cleanedProduct = { ...product };

                delete cleanedProduct._id;
                delete cleanedProduct.buyer;
                delete cleanedProduct.seller;
                delete cleanedProduct.sold;
                delete cleanedProduct.date;

                if (cleanedProduct.image && cleanedProduct.image._id) {
                    delete cleanedProduct.image._id;
                }
                if (cleanedProduct.address && cleanedProduct.address._id) {
                    delete cleanedProduct.address._id; 
                }

                await axios.put(`http://localhost:1601/products/${id}`, cleanedProduct, {
                    headers: {
                        'Authorization': localStorage.getItem('token'),
                    },
                });

                toast.success('Product updated successfully!');
                navigate('/myCard');
                window.location.reload();
            } catch (err) {
                if (err.response && err.response.data && err.response.data.message) {
                    setErrors(err.response.data);
                } else {
                    setErrors({ general: err.message });
                }
                toast.error('Product update failed. Please try again.');
            }
        }
    };
            
    return (
        <div className="edit-product container d-flex justify-content-center align-items-center vh-100"  
        style={{marginTop: '15%', marginBottom: '15%'}}>
            <div className="card p-4 shadow mt-5" style={{ maxWidth: '600px', width: '100%' }}>
                <h2 className="text-center mb-4">Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter product name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder="Enter price"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            placeholder="Enter product description"
                            value={product.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select
                            className="form-select"
                            id="category"
                            value={product.category}
                            onChange={handleChange}
                            required
                        >
                            <option disabled value="">Select a category</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Home">Home</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phone">Contact Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                            value={product.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <h5>Image</h5>
                    <div className="form-group mb-3">
                        <label htmlFor="image.url">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image.url"
                            placeholder="Enter image URL"
                            value={product.image.url[0]}
                            onChange={(e) => handleChange({ target: { id: 'image.url', value: [e.target.value] } })}
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
                            value={product.image.alt}
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
                                value={product.address.state}
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
                                value={product.address.country}
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
                                value={product.address.city}
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
                                value={product.address.street}
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
                                value={product.address.houseNumber}
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
                                value={product.address.zip}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {Object.keys(errors).map((key) => (
                        <div key={key} className="alert alert-danger">{errors[key]}</div>
                    ))}
                    <button type="submit" className="btn btn-primary w-100">Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default EditCard;
