import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import './AdminMane.css'

const AdminMane = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1601/users', {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => {
                toast.error(error.response.data.message)
            })
    }, []);

    const handleDeleteCard = (user) => {
        axios.delete(`http://localhost:1601/users/${user._id}`, {
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
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={user._id}>
                            <td>{i + 1}</td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>
                                <button type="button" className="btn btn-outline-primary" onClick={() => handleDeleteCard(user)}>Delete</button><br />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminMane
