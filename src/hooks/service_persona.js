import Cookies from 'js-cookie';
import { GET, POST } from './connection';

export async function all_person() {
    let datos = null;

    try {
        const token = await Cookies.get('token');
        datos = await GET('persona', token);
    } catch (error) {
        console.log(error.response.data);
        return { "code": 500 }
    }
    return datos.data;
    // TODO agarrar errores
}

export async function get_person(token, external) {
    let datos = null;
    try {
        datos = await GET('persona'+external, token);
    } catch (error) {
        console.log(error.response.data);
        return { "code": 500 }
    }
    return datos.data;
}

export async function estado_civil() {
    let datos = null;

    try {
        datos = await GET('estados_civiles');
    } catch (error) {
        return error.response.data;
    }
    return datos.data;
}

export async function save_person_census(token, data) {
    let datos = null;
    try {
        datos = await POST('persona/guardar/censado', data, token);
    } catch (error) {
        console.log(error.response.data);
        return { "code": 500 }
    }
    return datos.data;
}