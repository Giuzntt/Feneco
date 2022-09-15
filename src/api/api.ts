import axios from "axios";




const api_viacep= axios.create({
    baseURL: `https://viacep.com.br/ws/`,
    headers: {
        "Content-Type": "application/json",
    }
}); 



export default api_viacep;