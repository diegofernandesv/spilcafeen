import React from "react";
import styles from "./Dashboard.module.css";

function ActionButtons() {
  return (
    <div className={styles.actionButtons}>
      <button className={styles.actionBtnaddBtn}>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;5:98&quot; layer-name=&quot;gg:add&quot; width=&quot;25&quot; height=&quot;24&quot; viewBox=&quot;0 0 25 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;btn-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M2.5 12C2.5 6.477 6.977 2 12.5 2C18.023 2 22.5 6.477 22.5 12C22.5 17.523 18.023 22 12.5 22C6.977 22 2.5 17.523 2.5 12ZM12.5 4C10.3783 4 8.34344 4.84285 6.84315 6.34315C5.34285 7.84344 4.5 9.87827 4.5 12C4.5 14.1217 5.34285 16.1566 6.84315 17.6569C8.34344 19.1571 10.3783 20 12.5 20C14.6217 20 16.6566 19.1571 18.1569 17.6569C19.6571 16.1566 20.5 14.1217 20.5 12C20.5 9.87827 19.6571 7.84344 18.1569 6.34315C16.6566 4.84285 14.6217 4 12.5 4Z&quot; fill=&quot;white&quot;></path> <path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M13.5 7C13.5 6.73478 13.3946 6.48043 13.2071 6.29289C13.0196 6.10536 12.7652 6 12.5 6C12.2348 6 11.9804 6.10536 11.7929 6.29289C11.6054 6.48043 11.5 6.73478 11.5 7V11H7.5C7.23478 11 6.98043 11.1054 6.79289 11.2929C6.60536 11.4804 6.5 11.7348 6.5 12C6.5 12.2652 6.60536 12.5196 6.79289 12.7071C6.98043 12.8946 7.23478 13 7.5 13H11.5V17C11.5 17.2652 11.6054 17.5196 11.7929 17.7071C11.9804 17.8946 12.2348 18 12.5 18C12.7652 18 13.0196 17.8946 13.2071 17.7071C13.3946 17.5196 13.5 17.2652 13.5 17V13H17.5C17.7652 13 18.0196 12.8946 18.2071 12.7071C18.3946 12.5196 18.5 12.2652 18.5 12C18.5 11.7348 18.3946 11.4804 18.2071 11.2929C18.0196 11.1054 17.7652 11 17.5 11H13.5V7Z&quot; fill=&quot;white&quot;></path> </svg>",
            }}
          />
        </div>
        <span>Add new game</span>
      </button>
      <button className={styles.actionBtnmanageBtn}>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;5:104&quot; layer-name=&quot;ic:round-inventory&quot; width=&quot;25&quot; height=&quot;24&quot; viewBox=&quot;0 0 25 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;btn-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path d=&quot;M5.5 5H7.5V6C7.5 7.1 8.4 8 9.5 8H15.5C16.6 8 17.5 7.1 17.5 6V5H19.5V10H21.5V5C21.5 3.9 20.6 3 19.5 3H15.32C14.9 1.84 13.8 1 12.5 1C11.2 1 10.1 1.84 9.68 3H5.5C4.4 3 3.5 3.9 3.5 5V19C3.5 20.1 4.4 21 5.5 21H11.5V19H5.5V5ZM12.5 3C13.05 3 13.5 3.45 13.5 4C13.5 4.55 13.05 5 12.5 5C11.95 5 11.5 4.55 11.5 4C11.5 3.45 11.95 3 12.5 3Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M22.25 12.25C21.84 11.84 21.16 11.84 20.75 12.25L16.01 17L13.75 14.75C13.34 14.34 12.67 14.34 12.25 14.75C11.84 15.16 11.84 15.84 12.25 16.25L15.3 19.29C15.69 19.68 16.32 19.68 16.71 19.29L22.24 13.75C22.66 13.34 22.66 12.66 22.25 12.25Z&quot; fill=&quot;white&quot;></path> </svg>",
            }}
          />
        </div>
        <span>Manage inventory</span>
      </button>
    </div>
  );
}

export default ActionButtons;
