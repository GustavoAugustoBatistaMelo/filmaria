import axios from "axios";
// https://sujeitoprogramador.com (base url)
///r-api/?api=filmes(todos os filmes)

const api = axios.create({
    baseURL:'https://sujeitoprogramador.com'
});

export default api;