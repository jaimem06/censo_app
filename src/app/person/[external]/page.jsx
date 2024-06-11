'use client';
import './styles.css';
import Menu from '@/app/components/menu/menu';
import { save_person_census, estado_civil } from '@/hooks/service_persona';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

// Funcion para traer el enum de estado civil
export default function ModificarPerson(params) {
    console.log(params.external);
    const [estadoCivil, setEstadoCivil] = useState([]);
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    useEffect(() => {
        const fetchEstadoCivil = async () => {
            const data = await estado_civil();
            setEstadoCivil(data);
        };

        fetchEstadoCivil();
    }, []);

    // Funcion para guardar un censado
    const sendInfo = async (data) => {
        let token = Cookies.get('token');
        const info = await save_person_census(token, data);
        if (info.code == '200') {
            console.log(info);
            swal({
                title: "Info",
                text: info.datos.tag,
                icon: "success",
                button: "Aceptar",
                timer: 4000,
                closeOnEsc: true,
            });
            router.push('/person')
            router.refresh();
        } else {
            swal({
                title: "Error",
                text: info.datos.error,
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
            <section className="container" style={{ marginTop: "20px" }}>
                <header>Modificar Censado</header>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box">
                        <label>Nombres:</label>
                        <input {...register('nombres')} required placeholder="Ingresa los nombres" type="text" />
                    </div>
                    <div className="input-box">
                        <label>Apellidos:</label>
                        <input {...register('apellidos')} required placeholder="Ingresa los apellidos" type="text" />
                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>Fecha de Nacimiento:</label>
                            <input {...register('fecha_nac')} required placeholder="Fecha de nacimiento" type="date" />
                        </div>
                    </div>
                    <div className="input-box estado">
                        <label>Estado Civil</label>
                        <div className="column">
                            <div className="select-box">
                                <select {...register('estado')} required>
                                    <option hidden>Estado Civil</option>
                                    {estadoCivil.map((estado, index) => (
                                        <option key={index} value={estado}>{estado}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit">MODIFICAR</button>
                </form>
            </section>
        </div>
    );
}