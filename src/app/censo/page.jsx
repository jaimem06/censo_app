'use client';
import './styles.css';
import Menu from '@/app/components/menu/menu';
import { guardar_censo, motivo_censo } from '@/hooks/services_censo';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import MapComponent from '../components/menu/mapa';
import { all_person } from "@/hooks/service_persona";
import Link from "next/link";

export default function NewCenso() {
    const [motivo, setMotivo] = useState([]);
    const [persons, setPersons] = useState([]);
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchMotivo = async () => {
            const data = await motivo_censo();
            setMotivo(data);
        };

        const fetchPersons = async () => {
            const data = await all_person();
            setPersons(data.datos);
        };

        fetchMotivo();
        fetchPersons();
    }, []);

    const sendInfo = async (data) => {
        let token = Cookies.get('token');
        // Convertir los valores a números
        data.lat = Number(data.lat);
        data.long = Number(data.long);
        const info = await guardar_censo(token, data);

        if (info.code == '200') {
            console.log(info);
            swal({
                title: "Info",
                text: info.msg,
                icon: "success",
                button: "Aceptar",
                timer: 4000,
                closeOnEsc: true,
            });
            router.push('/censo')
            router.refresh();
        } else {
            swal({
                title: "Error",
                text: info.msg,
                icon: "error",
                button: "Aceptar",
                timer: 4000,
                closeOnEsc: true,
            });
            console.log(info);
            console.log("NO");
        }
    }
    const onSubmit = data => sendInfo(data);

    return (
        <div>
            <Menu></Menu>
            <div style={{ margin: "10px" }}>
                <div className="flex">
                    <input
                        type="text"
                        className="w-full max-w-[120px] bg-white pl-2 text-sm font-medium text-black outline-none rounded-l-lg"
                        placeholder=""
                        id=""
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <input type="button" value="Buscar" className="bg-blue-500 p-1 rounded-tr-lg rounded-br-lg text-white font-medium hover:bg-blue-800 transition-colors" />
                </div>
            </div>
            <div className="container-fluid" style={{ maxHeight: '100px', overflow: 'auto' }}>
                <table className="table table-bordered" style={{ textAlign: "center"}}>
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
                        {Array.isArray(persons) && persons.filter(person =>
                        (person.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            person.nombres.toLowerCase().includes(searchTerm.toLowerCase())) ||
                            person.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            person.fecha_nac.toLowerCase().includes(searchTerm.toLowerCase())
                        ).map((person, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{person.apellidos} {person.nombres}</td>
                                <td>{person.estado}</td>
                                <td>{person.fecha_nac}</td>
                                <td>
                                    <Link href={"/person/" + person.external_id} className="btn btn-info">Censar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <MapComponent popupContent="Ubicación del Censo" />
                <section className="container" style={{ marginTop: "20px" }}>
                    <header>Registrar Censo</header>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-box">
                            <label>Latitud</label>
                            <input {...register('lat')} required placeholder="Ingresar Latitud" type="number" />
                        </div>
                        <div className="input-box">
                            <label>Longitud</label>
                            <input {...register('long')} required placeholder="Ingresar Longitud" type="number" />
                        </div>
                        <div className="input-box estado">
                            <label>Motivo</label>
                            <div className="column">
                                <div className="select-box">
                                    <select {...register('motivo')} required>
                                        <option hidden>Motivo del Censo</option>
                                        {Array.isArray(motivo) && motivo.map((motivo, index) => (
                                            <option key={index} value={motivo.nombre}>{motivo.nombre}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="input-box">
                            <label>Otro motivo:</label>
                            <input {...register('nombre')} required placeholder="Ingresar el motivo" type="text" />
                        </div>
                        <button type="submit">Guardar Datos</button>
                    </form>
                </section>
            </div>
        </div>
    );
}