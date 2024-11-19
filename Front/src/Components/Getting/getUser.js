import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; 

const getUser = async (token) => {
    try {
        
        let theUserId = null;

        if (token) {
            try {
                const decoded = jwtDecode(token);
                theUserId = decoded.userId;
            } catch (error) {
                console.error("Token decoding failed:", error);
                return null;
            }
        }

        if (!theUserId) {
            return null;
            }

        const response = await axios.get(`http://localhost:1601/users/${theUserId}`, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        });
        
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default getUser;
