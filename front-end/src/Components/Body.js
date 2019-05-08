import React from 'react';
import {Grid} from '@material-ui/core'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const BodyApp = () => <>
  <Grid item css={borde} xs={9}>
    Body
  </Grid>
</>

export default BodyApp