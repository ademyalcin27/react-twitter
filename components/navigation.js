import React from 'react';
import { useRouter } from 'next/router';

import NavigationButton from './nav-button';
import TextTitle from './text-title';
import styles from './navigation.module.css'
import { MENU } from '../constants';


function Navigation({ flat = false }) {
  const router = useRouter();
  return <nav className={styles.nav}>
    {
      MENU.map(menu => {
        const showTitle = !flat && menu.title.length > 0
        const selected = router.pathname === menu.path
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={styles.navButton}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        )
      })
    }
  </nav>
}

export default Navigation;