import React from 'react'
import classes from './Input.module.scss';

export default function Input(props) {
  return (
    <input className={classes.myInput} {...props}/>
  )
}
