import { all_person } from "@/hooks/service_persona"
import Menu from "../components/menu/menu"

export default async function page() {

    let persons = await all_person();

    return (
        <div>
            <Menu></Menu>
            <main className="form-signin text-center mt-5">
                <div className="container-fluid">
                    <table className="table">
                        <thead>
                            <tr>
                                <tr>Nro</tr>
                                <tr>Usuario</tr>
                                <tr>Estado</tr>
                                <tr>Fecha Nac</tr>
                                <tr>Acciones</tr>
                            </tr>
                        </thead>
                        <tbody>
                            {persons.datos.map((dato, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{dato.apellidos} {dato.nombres}</td>
                                    <td>{dato.estado}</td>
                                    <td>{dato.fecha_nac}</td>
                                    <tr>
                                        <button className="btn btn-success">Editar</button>
                                        <button className="btn btn-warning">Eliminar</button>
                                    </tr>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
