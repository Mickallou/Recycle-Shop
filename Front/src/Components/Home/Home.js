import React, { useContext } from 'react';
import './Home.css';
import pubHome from '../../images/pub-home.jpeg';
import Card from '../Card/Card';
import { GeneralContext } from '../../App';
import OneCard from '../Card/OneCard';

const Home = () => {
    const { details, data, products, search } = useContext(GeneralContext);

    return (
        <div>
            {details && data ? <OneCard data={data} /> : null}
            <div className="divImg">
                <img src={pubHome} alt='pubHome' />
            </div>
            {search &&
                <h1>Research cards: {search}</h1>
            }
            <div className="container d-flex flex-wrap gap-3 justify-content-center">
                {(search 
                    ? products.filter(product => 
                        product.name.toLowerCase().includes(search.toLowerCase()) && !product.sold
                    )                   
                    : products.filter(product => !product.sold)
                ).map(product => (
                    <Card key={product._id} data={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
