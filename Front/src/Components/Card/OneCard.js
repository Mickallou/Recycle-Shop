import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { GeneralContext } from '../../App'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OneCard = ({ data }) => {
    const [product, setProduct] = useState(null);
    const [contact, setContact] = useState(false);
    const { setDetails, theUser } = useContext(GeneralContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    const productUser = theUser?._id === data.seller;

    useEffect(() => {
        axios.get(`http://localhost:1601/products/${data._id}`)
            .then(response => {
                setProduct(response.data);
            })
    }, [data._id]);

    const handleDetails = () => {
        setDetails(false);
    }

    const handleContact = (yesNo) => {
        setContact(yesNo);
    }

    if (!product) return <div>Loading...</div>;

    const handleDelete = () => {
        if (isDeleting) return; 
        setIsDeleting(true);
    
        axios.delete(`http://localhost:1601/products/${data._id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then(() => {
            toast.success('Product deleted successfully');
            setDetails(false);
            window.location.reload();
        })
        .catch(error => {
            toast.error(error.response?.data || "An error occurred");
        })
        .finally(() => {
            setIsDeleting(false); 
        });
    };

    return (
        <div className='oneCardContainer'>
            <div className="oneCard " >
                <div className='closeButton'>
                    <button className='btn btn-secondary btn-sm' onClick={handleDetails}>X</button>
                </div>
                <div className='oneCardHeader d-flex justify-content-center gap-5'>
                    {product.image && product.image.url && product.image.url.length > 0 ? (
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                {product.image.url.map((image, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img src={image} alt={image.alt} />
                                    </div>
                                ))}                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    ) : (
                        <div>No image available</div>
                    )}
                    <div className="card-body">
                        {contact ? (
                            <div>
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Phone: {product.phone}</p>
                                <p></p>
                                <p className="card-text">Address:<br/> {product.address.country} {product.address.state}, {product.address.city} {product.address.street} {product.address.houseNumber}</p>
                            </div>
                            ) : (
                            <div>
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.price} $</p>
                            </div>
                            )}
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between '>
                {contact ? (
                        <div className='oneCardFooter'>
                            <button className='btn btn-secondary btn-sm' onClick={() => handleContact(false)}>See The Product</button>
                        </div>
                    ) : (
                        <div className='oneCardFooter'>
                            <button className='btn btn-secondary btn-sm' onClick={() => handleContact(true)}>Contact For Sale</button>
                        </div>
                    )}
                    <div>
                        {productUser && (
                            <div className='oneCardFooter d-flex justify-content-center align-items-center gap-3'>
                                <button className='btn btn-secondary btn-sm' onClick={() => navigate('/editCard/' + data._id)}>Edit</button>
                                <button className='btn btn-secondary btn-sm' onClick={handleDelete}>Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OneCard;
