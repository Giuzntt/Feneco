import axios from "axios";




export const api_viacep= axios.create({
    baseURL: `https://viacep.com.br/ws/`,
    headers: {
        "Content-Type": "application/json",
    }
}); 

export const api_vagas = axios.create({
  baseURL: `https://6331b7db3ea4956cfb65bfc4.mockapi.io/`,
  headers: {
    "Content-Type": "application/json",
  },
});


export const api_task = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  headers: {
    "Content-Type": "application/json",
  },
});


