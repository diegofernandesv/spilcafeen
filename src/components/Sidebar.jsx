import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Burger Menu Icon */}
      <div
        className={`${styles.burgerMenu} ${isSidebarOpen ? styles.active : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <div className={styles.logo}>
          <div>
            <svg
              id="1:63"
              layer-name="fa-solid:dice"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-icon"
              style={{ width: "20px", height: "16px" }}
            >
              <g clipPath="url(#clip0_1_63)">
                <path
                  d="M18.5 6.5H14.7894C15.1859 7.42469 15.0119 8.5375 14.2581 9.29125L10 13.5494V15C10 15.8284 10.6716 16.5 11.5 16.5H18.5C19.3284 16.5 20 15.8284 20 15V8C20 7.17156 19.3284 6.5 18.5 6.5ZM15 12.25C14.5859 12.25 14.25 11.9141 14.25 11.5C14.25 11.0856 14.5859 10.75 15 10.75C15.4141 10.75 15.75 11.0856 15.75 11.5C15.75 11.9141 15.4141 12.25 15 12.25ZM13.5509 6.41563L8.08438 0.949062C7.48563 0.350313 6.51469 0.350313 5.91594 0.949062L0.449062 6.41563C-0.149687 7.01438 -0.149687 7.98531 0.449062 8.58406L5.91563 14.0509C6.51438 14.6497 7.48531 14.6497 8.08406 14.0509L13.5509 8.58438C14.1497 7.98531 14.1497 7.01438 13.5509 6.41563ZM3 8.25C2.58594 8.25 2.25 7.91406 2.25 7.5C2.25 7.08563 2.58594 6.75 3 6.75C3.41406 6.75 3.75 7.08563 3.75 7.5C3.75 7.91406 3.41406 8.25 3 8.25ZM7 12.25C6.58594 12.25 6.25 11.9141 6.25 11.5C6.25 11.0856 6.58594 10.75 7 10.75C7.41406 10.75 7.75 11.0856 7.75 11.5C7.75 11.9141 7.41406 12.25 7 12.25ZM7 8.25C6.58594 8.25 6.25 7.91406 6.25 7.5C6.25 7.08563 6.58594 6.75 7 6.75C7.41406 6.75 7.75 7.08563 7.75 7.5C7.75 7.91406 7.41406 8.25 7 8.25ZM7 4.25C6.58594 4.25 6.25 3.91406 6.25 3.5C6.25 3.08562 6.58594 2.75 7 2.75C7.41406 2.75 7.75 3.08562 7.75 3.5C7.75 3.91406 7.41406 4.25 7 4.25ZM11 8.25C10.5859 8.25 10.25 7.91406 10.25 7.5C10.25 7.08563 10.5859 6.75 11 6.75C11.4141 6.75 11.75 7.08563 11.75 7.5C11.75 7.91406 11.4141 8.25 11 8.25Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_63">
                  <rect width="20" height="16" fill="white" transform="translate(0 0.5)"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className={styles.logoText}>SpilCaféen</h1>
        </div>
        <nav className={styles.navLinks}>
          <Link to="/dashboard" className={styles.navItemactive}>
            <div>
              <svg
                id="1:13"
                layer-name="material-symbols:home-rounded"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                style={{ width: "30px", height: "30px" }}
              >
                <path
                  d="M5 23.75V12.5C5 12.1042 5.08875 11.7292 5.26625 11.375C5.44375 11.0208 5.68833 10.7292 6 10.5L13.5 4.875C13.9375 4.54167 14.4375 4.375 15 4.375C15.5625 4.375 16.0625 4.54167 16.5 4.875L24 10.5C24.3125 10.7292 24.5575 11.0208 24.735 11.375C24.9125 11.7292 25.0008 12.1042 25 12.5V23.75C25 24.4375 24.755 25.0263 24.265 25.5163C23.775 26.0063 23.1867 26.2508 22.5 26.25H18.75C18.3958 26.25 18.0992 26.13 17.86 25.89C17.6208 25.65 17.5008 25.3533 17.5 25V18.75C17.5 18.3958 17.38 18.0992 17.14 17.86C16.9 17.6208 16.6033 17.5008 16.25 17.5H13.75C13.3958 17.5 13.0992 17.62 12.86 17.86C12.6208 18.1 12.5008 18.3967 12.5 18.75V25C12.5 25.3542 12.38 25.6512 12.14 25.8912C11.9 26.1312 11.6033 26.2508 11.25 26.25H7.5C6.8125 26.25 6.22417 26.0054 5.735 25.5163C5.24583 25.0271 5.00083 24.4383 5 23.75Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <span>Dashboard</span>
          </Link>
          <Link to="/inventory" className={styles.navItem}>
            <div>
              <svg
                id="1:17"
                layer-name="material-symbols:toys-and-games-outline"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                style={{ width: "30px", height: "30px" }}
              >
                <path
                  d="M3.75 21.5C3.75 21.1667 3.85958 20.8854 4.07875 20.6562C4.29792 20.4271 4.56333 20.3125 4.875 20.3125C5.04167 20.3125 5.20333 20.3388 5.36 20.3913C5.51667 20.4438 5.6675 20.5217 5.8125 20.625C6.08333 20.7917 6.35417 20.9375 6.625 21.0625C6.89583 21.1875 7.1875 21.25 7.5 21.25C8.1875 21.25 8.77625 21.0054 9.26625 20.5163C9.75625 20.0271 10.0008 19.4383 10 18.75C9.99917 18.0617 9.75458 17.4733 9.26625 16.985C8.77792 16.4967 8.18917 16.2517 7.5 16.25C7.1875 16.25 6.88542 16.3021 6.59375 16.4063C6.30208 16.5104 6.04167 16.6667 5.8125 16.875C5.6875 16.9792 5.54167 17.0575 5.375 17.11C5.20833 17.1625 5.04167 17.1883 4.875 17.1875C4.5625 17.1875 4.29708 17.0729 4.07875 16.8438C3.86042 16.6146 3.75083 16.3333 3.75 16V11.25C3.75 10.8958 3.87 10.5992 4.11 10.36C4.35 10.1208 4.64667 10.0008 5 10H9.6875C9.58333 9.6875 9.50542 9.375 9.45375 9.0625C9.40208 8.75 9.37583 8.4375 9.375 8.125C9.375 6.5625 9.92208 5.23458 11.0162 4.14125C12.1104 3.04792 13.4383 2.50083 15 2.5C16.5617 2.49917 17.89 3.04625 18.985 4.14125C20.08 5.23625 20.6267 6.56417 20.625 8.125C20.625 8.4375 20.5992 8.75 20.5475 9.0625C20.4958 9.375 20.4175 9.6875 20.3125 10H25C25.3542 10 25.6512 10.12 25.8912 10.36C26.1312 10.6 26.2508 10.8967 26.25 11.25V16C26.25 16.3542 26.13 16.6513 25.89 16.8913C25.65 17.1313 25.3533 17.2508 25 17.25C24.8333 17.25 24.6875 17.2133 24.5625 17.14C24.4375 17.0667 24.3125 16.9783 24.1875 16.875C23.9583 16.6667 23.6979 16.5104 23.4062 16.4063C23.1146 16.3021 22.8125 16.25 22.5 16.25C21.8125 16.25 21.2237 16.495 20.7337 16.985C20.2437 17.475 19.9992 18.0633 20 18.75C20.0008 19.4367 20.2458 20.0254 20.735 20.5163C21.2242 21.0071 21.8125 21.2517 22.5 21.25C22.8125 21.25 23.1146 21.1979 23.4062 21.0938C23.6979 20.9896 23.9583 20.8333 24.1875 20.625C24.2917 20.5208 24.4117 20.4321 24.5475 20.3588C24.6833 20.2854 24.8342 20.2492 25 20.25C25.3542 20.25 25.6512 20.37 25.8912 20.61C26.1312 20.85 26.2508 21.1467 26.25 21.5V26.25C26.25 26.6042 26.13 26.9012 25.89 27.1412C25.65 27.3812 25.3533 27.5008 25 27.5H5C4.64583 27.5 4.34917 27.38 4.11 27.14C3.87083 26.9 3.75083 26.6033 3.75 26.25V21.5ZM6.25 25H23.75V23.5625C23.5417 23.625 23.3383 23.6721 23.14 23.7037C22.9417 23.7354 22.7283 23.7508 22.5 23.75C21.125 23.75 19.9479 23.2604 18.9688 22.2813C17.9896 21.3021 17.5 20.125 17.5 18.75C17.5 17.375 17.9896 16.1979 18.9688 15.2188C19.9479 14.2396 21.125 13.75 22.5 13.75C22.7292 13.75 22.9429 13.7658 23.1413 13.7975C23.3396 13.8292 23.5425 13.8758 23.75 13.9375V12.5H18.0625C17.7083 12.5 17.4117 12.3854 17.1725 12.1563C16.9333 11.9271 16.8133 11.6458 16.8125 11.3125C16.8125 11.1458 16.8387 10.9738 16.8912 10.7963C16.9437 10.6188 17.0425 10.4783 17.1875 10.375C17.5417 10.125 17.7867 9.79667 17.9225 9.39C18.0583 8.98333 18.1258 8.56167 18.125 8.125C18.125 7.25 17.8229 6.51042 17.2188 5.90625C16.6146 5.30208 15.875 5 15 5C14.125 5 13.3854 5.30208 12.7812 5.90625C12.1771 6.51042 11.875 7.25 11.875 8.125C11.875 8.5625 11.9429 8.98458 12.0788 9.39125C12.2146 9.79792 12.4592 10.1258 12.8125 10.375C12.9583 10.4792 13.0575 10.6096 13.11 10.7663C13.1625 10.9229 13.1883 11.0842 13.1875 11.25C13.1875 11.6042 13.0675 11.9013 12.8275 12.1413C12.5875 12.3813 12.2908 12.5008 11.9375 12.5H6.25V13.9375C6.45833 13.875 6.66167 13.8283 6.86 13.7975C7.05833 13.7667 7.27167 13.7508 7.5 13.75C8.875 13.75 10.0521 14.2396 11.0312 15.2188C12.0104 16.1979 12.5 17.375 12.5 18.75C12.5 20.125 12.0104 21.3021 11.0312 22.2813C10.0521 23.2604 8.875 23.75 7.5 23.75C7.27083 23.75 7.05708 23.7342 6.85875 23.7025C6.66042 23.6708 6.4575 23.6242 6.25 23.5625V25Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <span>Inventory</span>
          </Link>
          <Link to="/websitecontent" className={styles.navItem}>
            <div>
              <svg
                id="1:31"
                layer-name="material-symbols:web"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                style={{ width: "30px", height: "30px" }}
              >
                <path
                  d="M5 25C4.3125 25 3.72417 24.7554 3.235 24.2663C2.74583 23.7771 2.50083 23.1883 2.5 22.5V7.5C2.5 6.8125 2.745 6.22417 3.235 5.735C3.725 5.24583 4.31333 5.00083 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2563 6.225 27.5008 6.81333 27.5 7.5V22.5C27.5 23.1875 27.2554 23.7763 26.7663 24.2663C26.2771 24.7563 25.6883 25.0008 25 25H5ZM5 22.5H18.125V18.125H5V22.5ZM20.625 22.5H25V11.25H20.625V22.5ZM5 15.625H18.125V11.25H5V15.625Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <span>Website Content</span>
          </Link>
          <Link to="/calendar" className={styles.navItem}>
            <div>
              <svg
                id="13:3"
                layer-name="material-symbols:calendar-month-rounded"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                style={{ width: "30px", height: "30px" }}
              >
                <path
                  d="M6.25 27.5C5.5625 27.5 4.97417 27.2554 4.485 26.7663C3.99583 26.2771 3.75083 25.6883 3.75 25V7.5C3.75 6.8125 3.995 6.22417 4.485 5.735C4.975 5.24584 5.56333 5.00084 6.25 5H7.5V3.75C7.5 3.39584 7.62 3.09917 7.86 2.86C8.1 2.62084 8.39667 2.50084 8.75 2.5C9.10333 2.49917 9.40042 2.61917 9.64125 2.86C9.88208 3.10084 10.0017 3.3975 10 3.75V5H20V3.75C20 3.39584 20.12 3.09917 20.36 2.86C20.6 2.62084 20.8967 2.50084 21.25 2.5C21.6033 2.49917 21.9004 2.61917 22.1412 2.86C22.3821 3.10084 22.5017 3.3975 22.5 3.75V5H23.75C24.4375 5 25.0263 5.245 25.5163 5.735C26.0063 6.225 26.2508 6.81334 26.25 7.5V25C26.25 25.6875 26.0054 26.2763 25.5163 26.7663C25.0271 27.2563 24.4383 27.5008 23.75 27.5H6.25ZM6.25 25H23.75V12.5H6.25V25ZM15 17.5C14.6458 17.5 14.3492 17.38 14.11 17.14C13.8708 16.9 13.7508 16.6033 13.75 16.25C13.7492 15.8967 13.8692 15.6 14.11 15.36C14.3508 15.12 14.6475 15 15 15C15.3525 15 15.6496 15.12 15.8913 15.36C16.1329 15.6 16.2525 15.8967 16.25 16.25C16.2475 16.6033 16.1275 16.9004 15.89 17.1413C15.6525 17.3821 15.3558 17.5017 15 17.5ZM10 17.5C9.64583 17.5 9.34917 17.38 9.11 17.14C8.87083 16.9 8.75083 16.6033 8.75 16.25C8.74917 15.8967 8.86917 15.6 9.11 15.36C9.35083 15.12 9.6475 15 10 15C10.3525 15 10.6496 15.12 10.8913 15.36C11.1329 15.6 11.2525 15.8967 11.25 16.25C11.2475 16.6033 11.1275 16.9004 10.89 17.1413C10.6525 17.3821 10.3558 17.5017 10 17.5ZM20 17.5C19.6458 17.5 19.3492 17.38 19.11 17.14C18.8708 16.9 18.7508 16.6033 18.75 16.25C18.7492 15.8967 18.8692 15.6 19.11 15.36C19.3508 15.12 19.6475 15 20 15C20.3525 15 20.6496 15.12 20.8912 15.36C21.1329 15.6 21.2525 15.8967 21.25 16.25C21.2475 16.6033 21.1275 16.9004 20.89 17.1413C20.6525 17.3821 20.3558 17.5017 20 17.5ZM15 22.5C14.6458 22.5 14.3492 22.38 14.11 22.14C13.8708 21.9 13.7508 21.6033 13.75 21.25C13.7492 20.8967 13.8692 20.6 14.11 20.36C14.3508 20.12 14.6475 20 15 20C15.3525 20 15.6496 20.12 15.8913 20.36C16.1329 20.6 16.2525 20.8967 16.25 21.25C16.2475 21.6033 16.1275 21.9004 15.89 22.1413C15.6525 22.3821 15.3558 22.5017 15 22.5ZM10 22.5C9.64583 22.5 9.34917 22.38 9.11 22.14C8.87083 21.9 8.75083 21.6033 8.75 21.25C8.74917 20.8967 8.86917 20.6 9.11 20.36C9.35083 20.12 9.6475 20 10 20C10.3525 20 10.6496 20.12 10.8913 20.36C11.1329 20.6 11.2525 20.8967 11.25 21.25C11.2475 21.6033 11.1275 21.9004 10.89 22.1413C10.6525 22.3821 10.3558 22.5017 10 22.5ZM20 22.5C19.6458 22.5 19.3492 22.38 19.11 22.14C18.8708 21.9 18.7508 21.6033 18.75 21.25C18.7492 20.8967 18.8692 20.6 19.11 20.36C19.3508 20.12 19.6475 20 20 20C20.3525 20 20.6496 20.12 20.8912 20.36C21.1329 20.6 21.2525 20.8967 21.25 21.25C21.2475 21.6033 21.1275 21.9004 20.89 22.1413C20.6525 22.3821 20.3558 22.5017 20 22.5Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <span>Calendar</span>
          </Link>
          <Link to="/report" className={styles.navItem}>
            <div>
              <svg
                id="13:9"
                layer-name="material-symbols:report-outline-rounded"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                style={{ width: "30px", height: "30px" }}
              >
                <path
                  d="M15 21.25C15.3542 21.25 15.6513 21.13 15.8913 20.89C16.1313 20.65 16.2508 20.3533 16.25 20C16.2492 19.6467 16.1292 19.35 15.89 19.11C15.6508 18.87 15.3542 18.75 15 18.75C14.6458 18.75 14.3492 18.87 14.11 19.11C13.8708 19.35 13.7508 19.6467 13.75 20C13.7492 20.3533 13.8692 20.6504 14.11 20.8912C14.3508 21.1321 14.6475 21.2517 15 21.25ZM15 16.25C15.3542 16.25 15.6513 16.13 15.8913 15.89C16.1313 15.65 16.2508 15.3533 16.25 15V10C16.25 9.64583 16.13 9.34917 15.89 9.11C15.65 8.87083 15.3533 8.75083 15 8.75C14.6467 8.74917 14.35 8.86917 14.11 9.11C13.87 9.35083 13.75 9.6475 13.75 10V15C13.75 15.3542 13.87 15.6513 14.11 15.8913C14.35 16.1313 14.6467 16.2508 15 16.25ZM11.3438 26.25C11.0104 26.25 10.6929 26.1875 10.3912 26.0625C10.0896 25.9375 9.82375 25.7604 9.59375 25.5312L4.46875 20.4062C4.23958 20.1771 4.0625 19.9113 3.9375 19.6088C3.8125 19.3063 3.75 18.9892 3.75 18.6575V11.345C3.75 11.0117 3.8125 10.6942 3.9375 10.3925C4.0625 10.0908 4.23958 9.825 4.46875 9.595L9.59375 4.47C9.82292 4.24083 10.0887 4.06375 10.3912 3.93875C10.6937 3.81375 11.0112 3.75083 11.3438 3.75H18.6562C18.9896 3.75 19.3075 3.8125 19.61 3.9375C19.9125 4.0625 20.1779 4.23958 20.4062 4.46875L25.5312 9.59375C25.7604 9.82292 25.9375 10.0887 26.0625 10.3912C26.1875 10.6937 26.25 11.0112 26.25 11.3438V18.6562C26.25 18.9896 26.1875 19.3075 26.0625 19.61C25.9375 19.9125 25.7604 20.1779 25.5312 20.4062L20.4062 25.5312C20.1771 25.7604 19.9113 25.9375 19.6088 26.0625C19.3063 26.1875 18.9888 26.25 18.6562 26.25H11.3438ZM11.375 23.75H18.625L23.75 18.625V11.375L18.625 6.25H11.375L6.25 11.375V18.625L11.375 23.75Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <span>Report</span>
          </Link>
          <Link to="/ratings-reviews" className={styles.navItem}>
            <div>
              <svg
                id="1:25"
                layer-name="material-symbols:stars-outline-rounded"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                style={{ width: "30px", height: "30px" }}
              >
                <path
                  d="M15 18.6875L18.4688 21.3125C18.7188 21.4792 18.9688 21.4846 19.2188 21.3288C19.4688 21.1729 19.5417 20.9487 19.4375 20.6562L18.125 16.3125L21.5313 13.875C21.7813 13.6875 21.8542 13.4529 21.75 13.1712C21.6458 12.8896 21.4479 12.7492 21.1562 12.75H17L15.5938 8.1875C15.4896 7.89583 15.2917 7.75 15 7.75C14.7083 7.75 14.5104 7.89583 14.4063 8.1875L13 12.75H8.84375C8.55208 12.75 8.35417 12.8908 8.25 13.1725C8.14583 13.4542 8.21875 13.6883 8.46875 13.875L11.875 16.3125L10.5625 20.6562C10.4583 20.9479 10.5313 21.1721 10.7813 21.3288C11.0313 21.4854 11.2813 21.48 11.5313 21.3125L15 18.6875ZM15 27.5C13.2708 27.5 11.6458 27.1717 10.125 26.515C8.60417 25.8583 7.28125 24.9679 6.15625 23.8438C5.03125 22.7196 4.14084 21.3967 3.485 19.875C2.82917 18.3533 2.50083 16.7283 2.5 15C2.49917 13.2717 2.8275 11.6467 3.485 10.125C4.1425 8.60333 5.03292 7.28042 6.15625 6.15625C7.27958 5.03208 8.6025 4.14167 10.125 3.485C11.6475 2.82833 13.2725 2.5 15 2.5C16.7275 2.5 18.3525 2.82833 19.875 3.485C21.3975 4.14167 22.7204 5.03208 23.8438 6.15625C24.9671 7.28042 25.8579 8.60333 26.5163 10.125C27.1746 11.6467 27.5025 13.2717 27.5 15C27.4975 16.7283 27.1692 18.3533 26.515 19.875C25.8608 21.3967 24.9704 22.7196 23.8438 23.8438C22.7171 24.9679 21.3942 25.8587 19.875 26.5162C18.3558 27.1737 16.7308 27.5017 15 27.5ZM15 25C17.7708 25 20.1304 24.0263 22.0788 22.0788C24.0271 20.1313 25.0008 17.7717 25 15C24.9992 12.2283 24.0254 9.86875 22.0788 7.92125C20.1321 5.97375 17.7725 5 15 5C12.2275 5 9.86792 5.97417 7.92125 7.9225C5.97459 9.87083 5.00083 12.23 5 15C4.99917 17.77 5.97333 20.1296 7.9225 22.0788C9.87167 24.0279 12.2308 25.0017 15 25Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <span>Ratings & Reviews</span>
          </Link>
          <Link to="/settings" className={styles.navItem}>
            <div>
              <svg
                id="1:41"
                layer-name="iconoir:settings"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                style={{ width: "30px", height: "30px" }}
              >
                <path
                  d="M15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75Z"
                  stroke="white"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M24.5275 12.9938L23.1562 9.68125L25 7.5L22.5 5L20.3312 6.85375L16.9475 5.4625L16.1688 2.5H13.7262L12.9362 5.50125L9.63 6.895L7.5 5L5 7.5L6.81625 9.73625L5.46625 13.0575L2.5 13.75V16.25L5.50125 17.07L6.895 20.375L5 22.5L7.5 25L9.73875 23.175L12.9963 24.515L13.75 27.5H16.25L17.005 24.5163L20.3187 23.1437C20.8712 23.54 22.5 25 22.5 25L25 22.5L23.145 20.3125L24.5175 16.9975L27.5 16.2225V13.75L24.5275 12.9938Z"
                  stroke="white"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <span>Settings</span>
          </Link>
          <Link to="/login" className={styles.navItem}>
            <div>
              <svg
                id="5:202"
                layer-name="material-symbols:account-circle"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                style={{ width: "30px", height: "30px" }}
              >
                <path
                  d="M7.3125 21.375C8.375 20.5625 9.5625 19.9221 10.875 19.4538C12.1875 18.9854 13.5625 18.7508 15 18.75C16.4375 18.7492 17.8125 18.9837 19.125 19.4538C20.4375 19.9237 21.625 20.5642 22.6875 21.375C23.4167 20.5208 23.9846 19.5521 24.3913 18.4688C24.7979 17.3854 25.0008 16.2292 25 15C25 12.2292 24.0263 9.86958 22.0788 7.92125C20.1313 5.97292 17.7717 4.99917 15 5C12.2283 5.00083 9.86875 5.975 7.92125 7.9225C5.97375 9.87 5 12.2292 5 15C5 16.2292 5.20333 17.3854 5.61 18.4688C6.01667 19.5521 6.58417 20.5208 7.3125 21.375ZM15 16.25C13.7708 16.25 12.7342 15.8283 11.89 14.985C11.0458 14.1417 10.6242 13.105 10.625 11.875C10.6258 10.645 11.0479 9.60833 11.8913 8.765C12.7346 7.92167 13.7708 7.5 15 7.5C16.2292 7.5 17.2658 7.92208 18.11 8.76625C18.9542 9.61042 19.3758 10.6467 19.375 11.875C19.3742 13.1033 18.9525 14.14 18.11 14.985C17.2675 15.83 16.2308 16.2517 15 16.25ZM15 27.5C13.2708 27.5 11.6458 27.1717 10.125 26.515C8.60417 25.8583 7.28125 24.9679 6.15625 23.8438C5.03125 22.7196 4.14084 21.3967 3.485 19.875C2.82917 18.3533 2.50083 16.7283 2.5 15C2.49917 13.2717 2.8275 11.6467 3.485 10.125C4.1425 8.60333 5.03292 7.28042 6.15625 6.15625C7.27958 5.03208 8.6025 4.14167 10.125 3.485C11.6475 2.82833 13.2725 2.5 15 2.5C16.7275 2.5 18.3525 2.82833 19.875 3.485C21.3975 4.14167 22.7204 5.03208 23.8438 6.15625C24.9671 7.28042 25.8579 8.60333 26.5163 10.125C27.1746 11.6467 27.5025 13.2717 27.5 15C27.4975 16.7283 27.1692 18.3533 26.515 19.875C25.8608 21.3967 24.9704 22.7196 23.8438 23.8438C22.7171 24.9679 21.3942 25.8587 19.875 26.5162C18.3558 27.1737 16.7308 27.5017 15 27.5ZM15 25C17.7708 25 20.1304 24.0263 22.0788 22.0788C24.0271 20.1313 25.0008 17.7717 25 15C24.9992 12.2283 24.0254 9.86875 22.0788 7.92125C20.1321 5.97375 17.7725 5 15 5C12.2275 5 9.86792 5.97417 7.92125 7.9225C5.97459 9.87083 5.00083 12.23 5 15C4.99917 17.77 5.97333 20.1296 7.9225 22.0788C9.87167 24.0279 12.2308 25.0017 15 25Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <span>Account</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
