import React, {useContext, useEffect} from 'react';
import './App.css';
import {Grid} from '@material-ui/core'
import Header from './Components/Header'
import SiderBar from './Components/SiderBar'
import BodyApp from './Components/Body'
import Cards from './data/cards.json'
import {AppContext} from './Context/AppContext'
import { BrowserRouter as Router, Route,} from 'react-router-dom'
import Post from './Components/CompBody/Post'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
function App() {

  useEffect(()=>{handleAddCards(Cards)})
 
  const {handleAddCards} = useContext(AppContext)
 
  return (
   <Router>
     {()=>{ handleAddCards(Cards)}}
    <Header />
    <Grid container css={borde}>
      <SiderBar />
      <Route exact path="/" render={(routeProps)=>(
              <BodyApp {...routeProps} />
      )}/>
      <Route path="/post" component={Post} />
    </Grid>
    </Router>
  );
   
   
}

export default App;
