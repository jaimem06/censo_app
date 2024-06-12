'use client';
import './styles.css';
import Menu from '@/app/components/menu/menu';
import { modify_person, estado_civil, get_person } from '@/hooks/service_persona';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

// Funcion para traer el enum de estado civil
export default function ModificarPerson(params) {
    const [estadoCivil, setEstadoCivil] = useState([]);
    const { register, handleSubmit, setValue } = useForm();
    const router = useRouter();

    const fetchPersonData = async () => {
        const token = Cookies.get('token');
        const response = await get_person(token, params.params.external);
        const data = response.datos; // Accede a los datos correctos
        setValue('nombres', data.nombres);
        setValue('apellidos', data.apellidos);
        setValue('fecha_nac', data.fecha_nac);
        setValue('estado', data.estado);
    };

    useEffect(() => {
        const fetchEstadoCivil = async () => {
            const data = await estado_civil();
            setEstadoCivil(data);
        };

        fetchPersonData();
        fetchEstadoCivil();
    }, []);

    // Funcion para modificar un censado
    const sendInfo = async (data) => {
        // Verificar que los datos no estén vacíos
        if (!data.nombres || !data.apellidos || !data.fecha_nac || !data.estado) {
            swal({
                title: "Error",
                text: "Todos los campos son obligatorios",
                icon: "error",
                button: "Aceptar",
                timer: 4000,
                closeOnEsc: true,
            });
            return;
        }

        let token = Cookies.get('token');
        const info = await modify_person(token, params.params.external, data);
        if (info.code == 200) {
            swal({
                title: "Info",
                text: info.msg,
                icon: "success",
                button: "Aceptar",
                timer: 4000,
                closeOnEsc: true,
            });
            router.push('/person');
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
        }
    };

    const onSubmit = data => sendInfo(data);

    return (
        <div>
            <Menu />
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
