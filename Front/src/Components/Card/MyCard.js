import React, { useContext } from 'react';
import { GeneralContext } from '../../App';
import Card from './Card';
import OneCard from './OneCard';
import AddProduct from '../BTN/AddProduct';

const MyCard = () => {
    const { theUser, details, data, products } = useContext(GeneralContext); 

    return (
        <div className='container mt-5'>
            <div className='container d-flex justify-content-center align-items-center flex-column mt-5'>
                {details && data ? <OneCard data={data}/> : null}
                <AddProduct />
                <div className='container d-flex flex-wrap gap-3 justify-content-center mt-5'>
                    {products.filter(product => product.seller === theUser?._id && product.sold === false).map(product => (
                        <Card key={product._id} data={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyCard;
