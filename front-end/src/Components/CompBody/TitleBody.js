import React from 'react';
import {Grid} from '@material-ui/core'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
  const titleStyle = css({
    fontSize: 20,
    padding: '20px 0px 20px 0px'
})
const TitleBody = () => <>
<Grid xs={12}>
  <div css={titleStyle}>
    LANGUAGES & TECHNOLOGIES
  </div>
</Grid>
  
</>

export default  TitleBody