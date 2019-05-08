import React, { useContext } from 'react';
import {Grid} from '@material-ui/core'
import avalith from './../../img/avalith.png'
import {AppContext} from './../../Context/AppContext'
import { NavLink} from 'react-router-dom'
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
const link = css({
  textDecoration: 'none'
})
const Card = props => {
  const {post} = props
  const {handleAddPost} = useContext(AppContext)

    return <> 
      <Grid item css={{cursor:'pointer'}} xs={4} onClick={()=>{
      handleAddPost(post)
    }}><NavLink to="/post" css={link}>
    <div css={cardCont}>
      <div css={{backgroundColor: 'black'}}>
        <img css={imgStyle} src={props.img} alt="avalith" />
      </div>
      <div css={descStyle}>{props.description}</div>
    </div>
   
    </NavLink> </Grid>
  
  
  
</>
}

export default  Card