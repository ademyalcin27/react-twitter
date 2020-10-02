import React from 'react';
import Button from './button';
import cn from 'classnames'

import styles from './nav-button.module.css'
function NavButton({ children, selected, notify, className, ...props }) {
  return <Button
    className={cn(styles.navButton, selected && styles.navButtonSelected, className)}
    {...props}
  >
    {notify > 0 && <span className={styles.notify}>{notify}</span>}
    {children}
  </Button>
}

export default NavButton;