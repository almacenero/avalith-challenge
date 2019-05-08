import React from 'react';
import {Grid} from '@material-ui/core'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})

const OwnStyle = css({
  backgroundColor: 'gray',
  color: 'white'
})

const textcontainer = css({
  margin: '20px 0px 20px 0px'
})
const AlingText = css({
  textAlign: 'center'
})
const NameStyle = css({
  padding: 5,
  fontSize: 20
}, AlingText)
const textStyle = css({
  padding: 5,
  fontSize: 15,

}, AlingText)
const Ownerdesc = () => <>
  <Grid container css={OwnStyle} 
    direction="column"
    justify="center"
    alignItems="center">
    <div css={textcontainer}>
      <div css={NameStyle}>YASSER QUINTANA</div>
      <div css={textStyle}>DNI: 175739XXX</div>
      <div css={textStyle}>35 YEARS OLD</div>
    </div>
  </Grid>
</>

export default Ownerdesc