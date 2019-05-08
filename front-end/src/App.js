import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core'
import Header from './Components/Header'
import SiderBar from './Components/SiderBar'
import BodyApp from './Components/Body'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
function App() {
  return (
   <>
    <Header />
    <Grid container css={borde}>
      <SiderBar />
      <BodyApp />
    </Grid>
    
   </>
  );
}

export default App;
