import React from 'react';
// Const
import CONST from '../constants';

// layout
import Layout from '../components/layout'

// Hooks
import useWindowSize from '../components/hooks/useWindowSize';

//Components
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

function HomePage() {
  const { width } = useWindowSize();
  return <Layout>
    <Sidebar flat={width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
    <Main>{JSON.stringify(width)}</Main>
    {width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
  </Layout>
}

export default HomePage