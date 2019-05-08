import React, {useContext, useEffect} from 'react';
import './App.css';
import {Grid} from '@material-ui/core'
import Header from './Components/Header'
import SiderBar from './Components/SiderBar'
import BodyApp from './Components/Body'
import Cards from './data/cards.json'
import {AppContext} from './Context/AppContext'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
function App() {

  useEffect(()=>{handleAddCards(Cards)})
 
  const {handleAddCards} = useContext(AppContext)
 
  return (
   <>
   {()=>{ handleAddCards(Cards)}}
    <Header />
    <Grid container css={borde}>
      <SiderBar />
      <BodyApp />
    </Grid>
    
   </>
  );
}

export default App;
