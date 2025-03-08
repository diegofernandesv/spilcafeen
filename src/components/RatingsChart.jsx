import React from "react";
import styles from "./Dashboard.module.css";

function RatingsChart() {
  return (
    <section className={styles.ratingsSection}>
      <h3 className={styles.sectionTitle}>Top rated games by ratings:</h3>
      <div className={styles.ratingsChart}>
        <div className={styles.chartBarsecond}>
          <div className={styles.gameName}>Game B</div> {/* Add game name */}
          <div>
            <svg
              id="5:94"
              width="89"
              height="195"
              viewBox="0 0 89 195"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="game-icon"
              style={{ width: "89px" }}
            >
              <circle cx="44.5" cy="25.5" r="25.5" fill="url(#pattern0_5_94)"></circle>
              <path
                d="M0 71C0 66.5817 3.58172 63 8 63H81C85.4183 63 89 66.5817 89 71V195H0V71Z"
                fill="#ED1433"
              ></path>
              <text
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Aeonik TRIAL"
                fontSize="24"
                letterSpacing="0em"
              >
                <tspan x="24" y="177.14">2nd</tspan>
              </text>
              <defs>
                <pattern id="pattern0_5_94" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_5_94" transform="translate(-0.207386) scale(0.00142045)"></use>
                </pattern>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.chartBarfirst}>
          <div className={styles.gameName}>Game A</div> {/* Add game name */}
          <div>
            <svg
              id="5:93"
              width="89"
              height="255"
              viewBox="0 0 89 255"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="game-icon"
              style={{ width: "89px" }}
            >
              <circle cx="44.5" cy="25.5" r="25.5" fill="url(#pattern0_5_93)"></circle>
              <path
                d="M0 68C0 63.5817 3.58172 60 8 60H81C85.4183 60 89 63.5817 89 68V255H0V68Z"
                fill="#ED1433"
              ></path>
              <text
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Aeonik TRIAL"
                fontSize="24"
                letterSpacing="0em"
              >
                <tspan x="30.5" y="237.14">1st </tspan>
              </text>
              <defs>
                <pattern id="pattern0_5_93" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_5_93" transform="translate(-0.207386) scale(0.00142045)"></use>
                </pattern>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.chartBarthird}>
          <div className={styles.gameName}>Game C</div> {/* Add game name */}
          <div>
            <svg
              id="5:92"
              width="89"
              height="120"
              viewBox="0 0 89 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="game-icon"
              style={{ width: "89px" }}
            >
              <circle cx="44.5" cy="25.5" r="25.5" fill="url(#pattern0_5_92)"></circle>
              <path
                d="M0 64C0 59.5817 3.58172 56 8 56H81C85.4183 56 89 59.5817 89 64V120H0V64Z"
                fill="#ED1433"
              ></path>
              <text
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Aeonik TRIAL"
                fontSize="24"
                letterSpacing="0em"
              >
                <tspan x="26.5" y="102.14">3rd</tspan>
              </text>
              <defs>
                <pattern id="pattern0_5_92" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_5_92" transform="translate(-0.207386) scale(0.00142045)"></use>
                </pattern>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RatingsChart;
