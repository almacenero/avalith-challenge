import React from 'react';
import {Grid} from '@material-ui/core'
import avalith from './../../img/avalith.png'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const cardCont = css({
  marginRight: 10,
  paddingBottom: 10
})
const descStyle = css({
  padding: 15,
  backgroundColor: 'white'
})
const imgStyle = css({
  width: 70,
  height: 70,
  margin: '10px 0px 10px 50px',
})
const Card = props => <>
  <Grid item  xs={4}>
  <div css={cardCont}>
    <div css={{backgroundColor: 'black'}}>
      <img css={imgStyle} src={props.img} alt="avalith" />
    </div>
    <div css={descStyle}>{props.description}</div>
  </div>
  </Grid>
  
</>

export default  Card