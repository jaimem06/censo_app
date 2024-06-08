import './styles.css';
import Menu from '@/app/components/menu/menu';

export default function page() {
    return (
        <div>
            <Menu></Menu>
            <section class="container" style={{ marginTop: "20px" }}>
                <header>Registrar Censado</header>
                <form class="form" action="#">
                    <div class="input-box">
                        <label>Nombres:</label>
                        <input required="" placeholder="Ingresa los nombres" type="text" />
                    </div>
                    <div class="input-box">
                        <label>Apellidos:</label>
                        <input required="" placeholder="Ingresa los apellidos" type="text" />
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <label>Fecha de Nacicmiento:</label>
                            <input required="" placeholder="Fecha de nacimiento" type="date" />
                        </div>
                    </div>
                    <div class="input-box estado">
                        <label>Estado Civil</label>
                        <div class="column">
                            <div class="select-box">
                                <select>
                                    <option hidden="">Country</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>Germany</option>
                                    <option>Japan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button>Guardar Datos</button>
                </form>
            </section>
        </div>
    );
}