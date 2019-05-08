import React from 'react';
import {Grid} from '@material-ui/core'
import OwnerDesc from './CompSideBar/Ownerdesc'
import SearchCard from './CompSideBar/SearchCard'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const SiderBar = () => <>
 <Grid item css={borde} xs={3}>
  <OwnerDesc />
  <SearchCard />
 </Grid>
</>

export default SiderBar