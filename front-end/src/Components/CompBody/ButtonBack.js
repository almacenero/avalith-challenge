import React from 'react';
import {Grid} from '@material-ui/core'

import { NavLink} from 'react-router-dom'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const link = css({
  textDecoration: 'none'
})
const buttonStyle = css({
  backgroundColor: 'black',
  color: 'white',
  padding: '8px 25px 8px 55px',
  fontSize: 20,
  marginTop: 20
})
const ButtonBack = () =>  <NavLink to="/" css={link}><div css={buttonStyle}>
  Go back</div>
</NavLink>



export default  ButtonBack