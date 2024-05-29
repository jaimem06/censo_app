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