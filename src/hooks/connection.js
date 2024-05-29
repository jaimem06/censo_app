const URL = process.env.URL_API;
import axios from 'axios';
import { headers } from 'next/headers';

export const lista = async () => {
    const headers = {
        headers: {
            "Accept": "application.json"
        }
    }
    return await axios.get(URL + "persona", headers)
}

// ------------------Tarea------------------
// Metodo POST
export const POST = async (ruta, data) => {
    const headers = {
        headers: {
            "Accept": "application.json"
        }
    }
    return await axios.post(URL + ruta, data, headers)
}

// Metodo GET
export const GET = async (ruta) => {
    const headers = {
        headers: {
            "Accept": "application.json"
        }
    }
    return await axios.get(URL + ruta, headers)
}