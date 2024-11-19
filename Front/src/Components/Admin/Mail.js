import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AdminMane.css';

const Mail = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1601/messages')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                toast.error('Error fetching messages');
            });
    }, []);

    const handleCloseMessage = (messageId) => {
        axios.patch(`http://localhost:1601/messages/${messageId}`)
            .then(response => {
                toast.success(response.data);
                setMessages(messages.filter(message => message._id !== messageId));
            })
            .catch(error => {
                toast.error('Error closing message');
            });
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sender</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Close</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.filter(mess => mess.closed === false).map((message, index) => (
                        <tr key={message._id}>
                            <td>{index + 1}</td>
                            <td>{message.sender}</td>
                            <td>{message.email}</td>
                            <td>{message.text}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={() => handleCloseMessage(message._id)}
                                >
                                    Close
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Mail;
