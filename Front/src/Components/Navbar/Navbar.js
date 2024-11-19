import React, {useContext, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GeneralContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Navbar.css'

const Navbar = () => {
    const {theUser, setSearch, search} = useContext(GeneralContext)
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
        window.location.reload();
        toast.info('You are now logged out!');
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setSearch('');
    }, [location, setSearch]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid ps-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#062C65" className="bi bi-recycle" viewBox="0 0 16 16">
                        <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z" stroke="#062C65" strokeWidth="1.3"/>
                    </svg>
                    <Link className="navbar-brand ps-3 fs-2 text-primary-emphasis" to="/">RecycleShop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/men">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/women">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/kids">Kids</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/accessories">Accessories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/categoryHome">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/eletronics">Electronics</Link>
                            </li>
                        </ul>
                        <div className="d-flex flex-column flex-lg-row align-items-center navPart2">
                            {theUser ?
                                <ul className="navbar-nav ms-lg-3 pe-3">
                                    <li className="nav-item dropdown">
                                        <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Hi {theUser.name.first}
                                        </p>
                                        <ul className="dropdown-menu">
                                            <li><Link to='/myCard' className="dropdown-item">My Products</Link></li>
                                            <li><Link to='/sold' className='dropdown-item'>Solded</Link></li>
                                            <li><Link to='/editUser' className='dropdown-item'>Edit Profil</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            {theUser.isAdmin &&
                                            <>
                                                <li><Link to={'/admin'} className='dropdown-item'>Users Managers</Link></li>
                                                <li><Link to={'/adminProducts'} className='dropdown-item'>Products Managers</Link></li>
                                                <li><Link to={'/mail'} className='dropdown-item'>Mail</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                            </>
                                            }
                                            <li><p className="dropdown-item" onClick={logout}>Logout</p></li>
                                        </ul>
                                    </li>                            
                                </ul>
                            : <ul className="navbar-nav ms-lg-3 pe-2">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                </li>
                            </ul>}
                            <form className="d-flex pe-4 mb-2 mb-lg-0" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearchChange}/>
                                <button className="btn btn-outline-primary" type="submit" >Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
