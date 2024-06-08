'use client';
import Cookies from "js-cookie";
import Link from "next/link";

export default function Menu() {
    const close = () => {
        Cookies.remove('token');
        Cookies.remove('user');
    }

    const styles = {
        header: {
            backgroundColor: '#2f3d5c',
            padding: '10px',
            color: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        ul: {
            listStyleType: 'none',
            padding: 0,
            display: 'flex',
            justifyContent: 'space-around',
        },
        li: {
            cursor: 'pointer',
        },
        link: {
            textDecoration: 'none',
            color: 'white',
        },
    };

    return (
        <header style={styles.header}>
            <div>
                <div>
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                            <Link href="/dashboard">
                                <p style={styles.link}>Dashboard</p>
                            </Link>
                        </li>
                        <li style={styles.li}>
                            <Link href="/person">
                                <p style={styles.link}>Tabla Persona</p>
                            </Link>
                        </li>
                        <li style={styles.li}>
                            <Link href="/contacts">
                                <p style={styles.link}>Contacts</p>
                            </Link>
                        </li>
                        <li style={styles.li}>
                            <Link href="/session">
                                <p onClick={close} style={styles.link}>Close</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}