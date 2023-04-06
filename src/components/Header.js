import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FaSync } from "react-icons/fa";

const Header = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <p
          className={styles.title}
          onClick={() => (window.location.href = "/")}
        >
          TV Show App
        </p>
      </div>
      <div className={styles.iconsContainer} onClick={handleRefresh}>
        <FaSync className={styles.icon} />
        <Link to="/about" className={styles.link}>
          <p className={styles.title}>About</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
