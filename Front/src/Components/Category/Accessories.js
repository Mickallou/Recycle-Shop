import React, { useContext } from 'react';
import '../Home/Home.css';
import Card from '../Card/Card';
import { GeneralContext } from '../../App';
import OneCard from '../Card/OneCard';
import pubAccessorie from '../../images/pubAccessorie.webp';

const Accessories = () => {
    const { details, data, products, search } = useContext(GeneralContext); 

    return (
        <div>
            {details && data ? <OneCard data={data}/> : null}
            <div className="divImg">
                <img src={pubAccessorie} alt="pubAccessorie" className="img" />
            </div>
            <div className="container d-flex flex-wrap gap-3 justify-content-center">
            {(search 
                    ? products.filter(product => 
                        product.name.toLowerCase().includes(search.toLowerCase()) && !product.sold && product.category === 'Accessories'
                    )                   
                    : products.filter(product => !product.sold && product.category === 'Accessories')
                ).map(product => (
                    <Card key={product._id} data={product} />
                ))}
            </div>
        </div>
    );
}

export default Accessories
