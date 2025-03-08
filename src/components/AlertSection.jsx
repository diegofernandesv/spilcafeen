import React from "react";
import styles from "./Dashboard.module.css";

function AlertSection() {
  return (
    <section className={styles.alerts}>
      <div className={styles.alertCard}>
        <div>
          <svg
            id="5:4"
            layer-name="ion:alert"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="alert-icon"
            style={{ width: "36px", height: "36px" }}
          >
            <path
              d="M18 5.625C17.3911 5.625 16.8342 6.1425 16.875 6.75L17.4375 21.9375C17.4375 22.0867 17.4968 22.2298 17.6023 22.3352C17.7077 22.4407 17.8508 22.5 18 22.5C18.1492 22.5 18.2923 22.4407 18.3978 22.3352C18.5032 22.2298 18.5625 22.0867 18.5625 21.9375L19.125 6.75C19.1658 6.1425 18.6089 5.625 18 5.625Z"
              fill="black"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 30.375C18.6213 30.375 19.125 29.8713 19.125 29.25C19.125 28.6287 18.6213 28.125 18 28.125C17.3787 28.125 16.875 28.6287 16.875 29.25C16.875 29.8713 17.3787 30.375 18 30.375Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.alertText}>
          <span>3 new reviews need approval</span>
          <span className={styles.alertLink}>Check them out</span>
        </div>
      </div>
      <div className={styles.alertCard}>
        <div>
          <svg
            id="5:20"
            layer-name="ic:outline-emoji-events"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="alert-icon"
            style={{ width: "36px", height: "36px" }}
          >
            <path
              d="M28.5 7.5H25.5V4.5H10.5V7.5H7.5C5.85 7.5 4.5 8.85 4.5 10.5V12C4.5 15.825 7.38 18.945 11.085 19.41C11.5594 20.534 12.3003 21.5257 13.2437 22.2993C14.1872 23.0728 15.3048 23.6051 16.5 23.85V28.5H10.5V31.5H25.5V28.5H19.5V23.85C20.6952 23.6051 21.8128 23.0728 22.7563 22.2993C23.6997 21.5257 24.4406 20.534 24.915 19.41C28.62 18.945 31.5 15.825 31.5 12V10.5C31.5 8.85 30.15 7.5 28.5 7.5ZM7.5 12V10.5H10.5V16.23C8.76 15.6 7.5 13.95 7.5 12ZM18 21C15.525 21 13.5 18.975 13.5 16.5V7.5H22.5V16.5C22.5 18.975 20.475 21 18 21ZM28.5 12C28.5 13.95 27.24 15.6 25.5 16.23V10.5H28.5V12Z"
              fill="black"
            />
          </svg>
        </div>
        <div className={styles.alertText}>
          <span>Monopoly Tournament is in:</span>
          <span className={styles.alertHighlight}>13 days</span>
        </div>
      </div>
    </section>
  );
}

export default AlertSection;
