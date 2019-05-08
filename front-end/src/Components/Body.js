import React from 'react';
import {Grid} from '@material-ui/core'
import TitleBody from './CompBody/TitleBody'
import ListCards from './CompBody/ListCards'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid',
      
})
const contitems = css({
  marginLeft: 30
})
const BodyApp = () => <>
  <Grid item css={{backgroundColor: '#D6DFE0'}} xs={9}>
    <Grid container  css={contitems} xs={11}>
      <TitleBody />
      <ListCards />
    </Grid>
   
  </Grid>
</>

export default BodyApp