import React from 'react';
import {Grid} from '@material-ui/core'
import avalith from './../img/avalith.png'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const headStyle = css({
  backgroundColor: 'black'
}, borde)
const imgStyle = css({
  width: 70,
  height: 70,
  margin: '10px 0px 10px 50px',
})
const Header = () => <>
 <Grid container css={headStyle}>
  <Grid item> <img css={imgStyle} src={avalith} alt="avalith"  /></Grid>
 </Grid>
</>

export default Header