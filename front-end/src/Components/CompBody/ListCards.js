import React, {useContext} from 'react';
import {Grid} from '@material-ui/core'
import Card from './Card'
import {AppContext} from './../../Context/AppContext'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const ListCards = () => {
  const {cards} = useContext(AppContext)
  return <>
  <Grid container >
{cards.map((prod) => <Card description={prod.cardDescription}
img={prod.cardImageUrl}/>)}
</Grid>
</>
} 


export default  ListCards