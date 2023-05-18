import axios from "axios";

const api = axios.create({
    baseURL: 'https://porn-gallery.p.rapidapi.com/pornos',
    headers: {
        'X-RapidAPI-Key': 'af19b5bb92msh85549fa79be3c0fp1a6b97jsn7f950539e4f0',
        'X-RapidAPI-Host': 'porn-gallery.p.rapidapi.com'
    }
});

export default api;