import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  return (
    <footer>
      <div className={styles.footer}>
        <div className={`${styles.foot}${styles.container}`}>
          <p>
            &copy; {currentMonth} {currentYear} BIT By Radmila Ivankovic
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
