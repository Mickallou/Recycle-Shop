import React, { useContext } from 'react';
import { GeneralContext } from '../../App';
import axios from 'axios';
import { toast } from 'react-toastify';

const Card = ({ data }) => {
    const { setDetails, setData, theUser } = useContext(GeneralContext);

    const solded = theUser?._id === data.seller;

    const handleClickedCard = () => {
        setData(data);
        setDetails(true);
    };

    const handleSolded = () => {
        axios.patch(`http://localhost:1601/products/${data._id}/sold`, {}, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
            .then(response => {
                toast.success(response.data);
                window.location.reload();
            })
            .catch(error => {
                toast.error(error.response.data);
            });
    }

    return (
        <div>
                <div className="card" key={data._id}>
                    <img src={data.image.url[0]} className="card-img-top" alt={data.image.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}</p>
                        <p className="card-text">{data.price}$</p>
                    </div>
                    <div className='card-footer d-flex gap-2'>
                        <button className='btn btn-secondary btn-sm' onClick={handleClickedCard}>More Details</button>
                        {solded  && <button className='btn btn-secondary btn-sm' onClick={handleSolded}>Sold</button>}
                    </div>
                </div>
        </div>
    );
};

export default Card;
