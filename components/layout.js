import React from 'react';
import cn from 'classnames';
import styles from './layout.module.css';

// Const
import CONST from '../constants';

// Hooks
import useWindowSize from '../components/hooks/useWindowSize';

//Components
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

function Layout({ children }) {
  const { width } = useWindowSize();

  return <div className={cn(styles.layout)}>
    <Sidebar flat={width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
    <Main>{children}</Main>
    {width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
  </div>
}

export default Layout;