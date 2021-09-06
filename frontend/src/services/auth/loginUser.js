import axios from '../axios';
const loginUser = async(user) => {
    try {
        const data = await axios().post('http://localhost:8001/auth/login', {username: user.email, password: user.password});
        return data;
        
    } catch (error) {
        return null;
    }
}

export default loginUser;
