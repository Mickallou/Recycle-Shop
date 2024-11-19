import React, { useContext } from 'react'
import { GeneralContext } from '../../App'
import OneCard from './OneCard'
import './../BTN/SeeMore.css'

const SoldCard = () => {
    const { products, setDetails, setData, data, details,  theUser } = useContext(GeneralContext)

    const handleDetails = (product) => {
        setData(product)
        setDetails(true)
    }

    return (
        <div>
            <div className='solded'>
                {details && data ? <OneCard data={data}/> : null}
                <h1>Solded Product</h1>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <td>Name of Product</td>
                            <td>Price</td>
                            <td>Address</td>
                            <td>Phone</td>
                            <td>See More</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            theUser && products.filter(product => theUser._id === product.seller && product.sold === true).map(product => (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.price} $</td>
                                    <td>{product.address.country}, {product.address.street} {product.address.houseNumber}, {product.address.city}</td>
                                    <td>{product.phone}</td>
                                    <td><button className='bn3637 bn38' onClick={() => handleDetails(product)}>See More</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SoldCard
