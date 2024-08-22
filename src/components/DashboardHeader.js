import React from 'react'
import styles from "../Styles/DashboardHeader.module.css"

function DashboardHeader({header, subheader}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.company_title}>
          {header}
        </h2>
        <p className={styles.company_sub_title}>
          {subheader}
        </p>
      </div>
    </div>
  )
}

export default DashboardHeader