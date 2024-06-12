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

export default function NewCenso() {
    const [motivo, setMotivo] = useState([]);
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    useEffect(() => {
        const fetchMotivo = async () => {
            const data = await motivo_censo();
            setMotivo(data);
        };

        fetchMotivo();
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <MapComponent position={[-0.225219, -78.5248]} popupContent="Ubicación del Censo" />
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