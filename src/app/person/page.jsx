import { all_person } from "@/hooks/service_persona"
import Menu from "../components/menu/menu"
import Link from "next/link";

export default async function page() {

    let persons = await all_person();

    return (
        <div>
            <Menu></Menu>
            <main>
                <div className="container-fluid">
                    <div className="col-4">
                        <Link href="/person/new" className="btn btn-success" style={{ margin: "10px" }}>Registrar Censado</Link>
                    </div>
                    <table className="table table-bordered" style={{textAlign: "center"}}>
                        <thead>
                            <tr>
                                <th>Nro</th>
                                <th>Usuario</th>
                                <th>Estado</th>
                                <th>Fecha Nac</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons.datos.map((dato, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{dato.apellidos} {dato.nombres}</td>
                                    <td>{dato.estado}</td>
                                    <td>{dato.fecha_nac}</td>
                                    <td>
                                        <button className="btn btn-success">Editar</button>
                                        <button className="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
