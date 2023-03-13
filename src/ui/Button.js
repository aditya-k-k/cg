import React from 'react'
import classes from './Button.module.css'
export default function Button(props) {
  return (
    <button disabled={props.disabled} className={`${classes.button} ${props.className}`} type={props.type ? props.type : 'button'} onClick={props.onClick}>
        {props.children}
    </button>
  )
}
