import React from 'react'
import {Grid} from '@material-ui/core'
import InputSearchCard from './inputSearchComp'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const SearchStyle = css({
  backgroundColor: 'black',
 
})
const contText = css({
  marginBottom: 1000
})
const inputCont = css({
  borderBottomColor: 'white',
  marginTop: 50
},borde)
const filterStyle = css({
  margin: '20px 0px 20px 0px'
})
const SearchCard = () => <>
  <Grid container css={SearchStyle} 
  direction="row"
  justify="center"
  alignItems="center">
    <Grid item xs={10} css={{color: 'white'}}>
    <div css={contText}>
      <InputSearchCard />
      <div css={filterStyle}>Filter by</div>
      <div >Fronted</div>
      <div >Backend</div>
    </div>
    </Grid>
  </Grid>
</>

export default SearchCard