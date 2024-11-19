import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AdminMane.css';

const ProductsMane = () => {
    const [products, setProducts] = useState([]);
    const [userMaps, setUserMaps] = useState({});

    useEffect(() => {
        axios.get('http://localhost:1601/products', {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                toast.error(error.response.data.message);
            });
    }, []);


    const handleDeleteProduct = (product) => {
        axios.delete(`http://localhost:1601/products/${product._id}`, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
            .then(response => {
                toast.success(response.data);
                setProducts(products.filter(p => p._id !== product._id));
            })
            .catch(error => {
                toast.error(error.response.data);
            });
    };

    useEffect(() => {
        axios.get('http://localhost:1601/users', {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
            .then(response => {
                const maps = {};
                response.data.forEach(user => {
                    maps[user._id] = `${user.name.first} ${user.name.last}`;
                });
                setUserMaps(maps);
            })
            .catch(error => {
                toast.error('Failed to load users');
            });
    }, []);

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Phone</th>
                        <th>Seller</th>
                        <th>Sold</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => (
                        <tr key={product._id}>
                            <td>{i + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.phone}</td>
                            <td>{userMaps[product.seller]}</td>
                            <td>{product.sold ? 'Yes' : 'No'}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={() => handleDeleteProduct(product)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsMane;
