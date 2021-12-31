import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xu7sGTZ_JYlgImHUqovWAQE1WZ-ZdI2AXw6nuoX9QI8'
    }
});
