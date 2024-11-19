import React, { useContext } from 'react';
import '../Home/Home.css';
import Card from '../Card/Card';
import { GeneralContext } from '../../App';
import OneCard from '../Card/OneCard';
import pubWomen from '../../images/pubWomen.webp';

const Women = () => {
    const { details, data, products, search } = useContext(GeneralContext); 

    return (
        <div>
            {details && data ? <OneCard data={data}/> : null}
            <div className="divImg">
                <img src={pubWomen} alt="pubWomen" className="img" />
            </div>
            <div className="container d-flex flex-wrap gap-3 justify-content-center">
            {(search 
                    ? products.filter(product => 
                        product.name.toLowerCase().includes(search.toLowerCase()) && !product.sold && product.category === 'Women'
                    )                   
                    : products.filter(product => !product.sold && product.category === 'Women')
                ).map(product => (
                    <Card key={product._id} data={product} />
                ))}
            </div>
        </div>
    );
}

export default Women
