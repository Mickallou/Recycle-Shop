import React, { useContext } from 'react';
import '../Home/Home.css';
import Card from '../Card/Card';
import { GeneralContext } from '../../App';
import OneCard from '../Card/OneCard';
import pubMen from '../../images/pubMen.webp';

const Men = () => {
    const { details, data, products, search } = useContext(GeneralContext); 

    return (
        <div>
            {details && data ? <OneCard data={data}/> : null}
            <div className="divImg">
                <img src={pubMen} alt="pubMen" className="img" />
            </div>
            <div className="container d-flex flex-wrap gap-3 justify-content-center">
            {(search 
                    ? products.filter(product => 
                        product.name.toLowerCase().includes(search.toLowerCase()) && !product.sold && product.category === 'Men'
                    )                   
                    : products.filter(product => !product.sold && product.category === 'Men')
                ).map(product => (
                    <Card key={product._id} data={product} />
                ))}
            </div>
        </div>
    );
}

export default Men;
