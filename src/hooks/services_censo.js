import Cookies from "js-cookie";
import {GET, POST} from "./connection";

export async function guardar_censo(token, data) {
    let datos = null;
    try {
        datos = await POST('guardar/censo/persona', data, token);
    } catch (error) {
        console.log(error.response.data);
        return { "code": 500 }
    }
    return datos.data;
}

export async function motivo_censo() {
    let datos = null;

    try {
        const response = await GET('motivo/activos');
        datos = response.data.datos;
    } catch (error) {
        return error.response.data;
    }
    return datos;
}