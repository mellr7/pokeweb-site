import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title} aria-label="Lista de pokemones">PoKéMoN</h1>
        <div className={styles['nav-links']}>
            <Link to="/" className={styles.link}>Inicio</Link>
            <Link to="/favorites" className={styles.link}>Favoritos</Link>
        </div>
    </nav>
  );
};

export default Navbar;
