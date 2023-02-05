import React from 'react'
import classes from "./Modal.module.scss";

export default function Modal({ children, visible, setVisible }) {

  const rootClasses = [classes.Modal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.ModalContent} onClick={e => e.stopPropagation()}>
        <button className={classes.ModalClose} onClick={() => setVisible(false)}></button>
        {children}
      </div>
    </div>
  )
}
