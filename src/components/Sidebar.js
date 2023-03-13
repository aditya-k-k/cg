import React from 'react'
import Button from '../ui/Button'
import classes from './Sidebar.module.css'
export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
        <a className={classes.anchor}>Configure Feature</a>
        <hr className={classes.hr}/>
        <a className={classes.anchor}>Scenario</a>
    </div>
  )
}
