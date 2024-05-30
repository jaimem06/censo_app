import {GET} from './connection';

export async function  all_person(){
    let datos = null;

    try {
        datos = await GET('persona');
    } catch (error) {
        console.log(error.response.data);
        return{"code": 500}
    }
    return datos.data;
    // TODO agarrar errores
}