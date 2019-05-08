import React, {useContext, useEffect} from 'react';
import {Grid} from '@material-ui/core'
import Card from './Card'
import {AppContext} from './../../Context/AppContext'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const ListCards = () => {
  const {cards, search} = useContext(AppContext)
  let newArray = []
  
  return <>
  <Grid container >
{newArray = cards.filter(card => {
  let re = /search/
  if(card.cardTitle.match(re))
  {return true}})
}
{console.log('Array nuevo: ' + newArray)}
{search === '' ? cards.map((prod) => <Card post={prod} description={prod.cardDescription}
img={prod.cardImageUrl}/> ) : newArray.map((prod) => <Card post={prod} description={prod.cardDescription}
img={prod.cardImageUrl}/> )
}
</Grid>
</>
} 


export default  ListCards