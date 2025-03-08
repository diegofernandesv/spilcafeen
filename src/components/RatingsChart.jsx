import React from "react";
import styles from "./Dashboard.module.css";

function RatingsChart() {
  return (
    <section className={styles.ratingsSection}>
      <h3 className={styles.sectionTitle}>Top rated games by ratings:</h3>
      <div className={styles.ratingsChart}>
        <div className={styles.chartBarsecond}>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;5:94&quot; width=&quot;89&quot; height=&quot;195&quot; viewBox=&quot;0 0 89 195&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; class=&quot;game-icon&quot; style=&quot;width: 89px&quot;> <circle cx=&quot;44.5&quot; cy=&quot;25.5&quot; r=&quot;25.5&quot; fill=&quot;url(#pattern0_5_94)&quot;></circle> <path d=&quot;M0 71C0 66.5817 3.58172 63 8 63H81C85.4183 63 89 66.5817 89 71V195H0V71Z&quot; fill=&quot;#ED1433&quot;></path> <text fill=&quot;white&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;Aeonik TRIAL&quot; font-size=&quot;24&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;24&quot; y=&quot;177.14&quot;>2nd</tspan></text> <defs> <pattern id=&quot;pattern0_5_94&quot; patternContentUnits=&quot;objectBoundingBox&quot; width=&quot;1&quot; height=&quot;1&quot;> <use xlink:href=&quot;#image0_5_94&quot; transform=&quot;translate(-0.207386) scale(0.00142045)&quot;></use> </pattern>  </defs> </svg>",
              }}
            />
          </div>
        </div>
        <div className={styles.chartBarfirst}>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;5:93&quot; width=&quot;89&quot; height=&quot;255&quot; viewBox=&quot;0 0 89 255&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; class=&quot;game-icon&quot; style=&quot;width: 89px&quot;> <circle cx=&quot;44.5&quot; cy=&quot;25.5&quot; r=&quot;25.5&quot; fill=&quot;url(#pattern0_5_93)&quot;></circle> <path d=&quot;M0 68C0 63.5817 3.58172 60 8 60H81C85.4183 60 89 63.5817 89 68V255H0V68Z&quot; fill=&quot;#ED1433&quot;></path> <text fill=&quot;white&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;Aeonik TRIAL&quot; font-size=&quot;24&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;30.5&quot; y=&quot;237.14&quot;>1st </tspan></text> <defs> <pattern id=&quot;pattern0_5_93&quot; patternContentUnits=&quot;objectBoundingBox&quot; width=&quot;1&quot; height=&quot;1&quot;> <use xlink:href=&quot;#image0_5_93&quot; transform=&quot;translate(-0.207386) scale(0.00142045)&quot;></use> </pattern>  </defs> </svg>",
              }}
            />
          </div>
        </div>
        <div className={styles.chartBarthird}>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;5:92&quot; width=&quot;89&quot; height=&quot;120&quot; viewBox=&quot;0 0 89 120&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; class=&quot;game-icon&quot; style=&quot;width: 89px&quot;> <circle cx=&quot;44.5&quot; cy=&quot;25.5&quot; r=&quot;25.5&quot; fill=&quot;url(#pattern0_5_92)&quot;></circle> <path d=&quot;M0 64C0 59.5817 3.58172 56 8 56H81C85.4183 56 89 59.5817 89 64V120H0V64Z&quot; fill=&quot;#ED1433&quot;></path> <text fill=&quot;white&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;Aeonik TRIAL&quot; font-size=&quot;24&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;26.5&quot; y=&quot;102.14&quot;>3rd</tspan></text> <defs> <pattern id=&quot;pattern0_5_92&quot; patternContentUnits=&quot;objectBoundingBox&quot; width=&quot;1&quot; height=&quot;1&quot;> <use xlink:href=&quot;#image0_5_92&quot; transform=&quot;translate(-0.207386) scale(0.00142045)&quot;></use> </pattern>  </defs> </svg>",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RatingsChart;
