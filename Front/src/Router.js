import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Men from './Components/Category/Men'
import Women from './Components/Category/Women'
import Kids from './Components/Category/Kids'
import Accessories from './Components/Category/Accessories'
import CategoryHome from './Components/Category/CategoryHome'
import Eletronics from './Components/Category/Eletronics'
import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup'
import MyCard from './Components/Card/MyCard'
import NewProduct from './Components/Card/NewCard'
import SoldCard from './Components/Card/SoldCard'
import AdminMane from './Components/Admin/AdminMane'
import EditCard from './Components/Card/EditCard'
import EditUser from './Components/Auth/EditUser'
import ProductsMane from './Components/Admin/ProductsMane'
import AboutUs from './Components/About/AboutUs'
import Contact from './Components/About/Contact'
import Mail from './Components/Admin/Mail'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/categoryHome' element={<CategoryHome />} />
            <Route path='/eletronics' element={<Eletronics />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/myCard' element={<MyCard />} />
            <Route path='/newCard' element={<NewProduct />} />
            <Route path='/sold' element={<SoldCard />} />
            <Route path='/admin' element={<AdminMane />} />
            <Route path="/editCard/:id" element={<EditCard />} />
            <Route path='/editUser' element={<EditUser />} />
            <Route path='/adminProducts' element={<ProductsMane />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='/mail' element={<Mail />} />
        </Routes>
    )
}

export default Router
