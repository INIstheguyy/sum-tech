import React from 'react'
import styles from '../../Styles/Dashboard.module.css'
import { Outlet } from 'react-router-dom'
import SideNav from '../../components/SideNav'
function Dashboard() {
  return (
    <div className={styles.dashboard}>
    <div className={styles.content}>
      <div className={styles.content_left_wrapper}>
       <SideNav/>
      </div>
      <div className={styles.content_right_wrapper}>
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Dashboard