import Cookies from 'js-cookie';
import {GET} from './connection';

export async function  all_person(){
    let datos = null;

    try {
        const token = await Cookies.get('token');
        datos = await GET('persona', token);
    } catch (error) {
        console.log(error.response.data);
        return{"code": 500}
    }
    return datos.data;
    // TODO agarrar errores
}