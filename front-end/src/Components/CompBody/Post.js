import React, {useContext, useState, useEffect} from 'react';
import {Grid} from '@material-ui/core'
import ButtonBack from './ButtonBack'
import {AppContext} from './../../Context/AppContext'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const Post = () => {
  const {cards, post} = useContext(AppContext)
 /* const [card, setcard] = useState('')
 const addCard =  () =>{
    if(card === ''){setcard(cards[0])}
  } */
  return <>
  {console.log(post)}
<Grid item xs={9}css={borde}>
  <Grid container css={[borde,{
    backgroundImage:  `url(${post !== '' ? post.cardPost.postImageUrl : '' })`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: 200,
    width: 2000,
  }]}>
      <ButtonBack />
  </Grid>
  <Grid container css={borde}>
      <Grid item xs={9}>
      <div css={{
        padding: 20
      }}>{post !== '' ? post.cardPost.postDescription : <div>Aliqua consectetur laborum incididunt aute id in pariatur aliquip minim esse Lorem.</div>}</div></Grid>
      <Grid item xs={3}>javaScript development </Grid>
  </Grid>
</Grid>
  
</>
}

export default  Post