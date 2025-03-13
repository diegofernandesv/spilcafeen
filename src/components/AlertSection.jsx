
import styles from "./Dashboard.module.css";

const events = [
  { title: "Monopoly Tournament", date: "2023-11-20" },
  { title: "Chess Championship", date: "2023-11-15" },
  { title: "Board Game Night", date: "2023-11-10" },
];

const getClosestEvent = () => {
  const today = new Date();
  return events
    .map((event) => ({
      ...event,
      date: new Date(event.date),
    }))
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date - b.date)[0];
};

const AlertSection = () => {
  const closestEvent = getClosestEvent();

  return (
    <section className={styles.alerts}>
      {closestEvent && (
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
            <span>{closestEvent.title} is in:</span>
            <span className={styles.alertHighlight}>
              {Math.ceil(
                (closestEvent.date - new Date()) / (1000 * 60 * 60 * 24)
              )}{" "}
              days
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default AlertSection;
