import React from 'react';
import Button from './button';
import cn from 'classnames'

import styles from './nav-button.module.css'
function NavButton ({ children, selected,notify, ...props }) {
  return <Button className={cn(styles.navButton, selected && styles.navButtonSelected)} {...props}>
    {children}
     {notify && <span className={styles.notify}>{notify}</span>}
  </Button>
}

export default NavButton;