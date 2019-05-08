import React from 'react'
import {Grid} from '@material-ui/core'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const style = {
  borderColor: 'white'
}
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  multilineColor:{
    color:'white',
}
  
});

const InputSearchCard = props =>{
  const { classes } = props
  
  return <>
    <TextField
    style={style}
    id="standard-bare"
    className={classes.textField}
    defaultValue="Search in cards"
    margin="normal"
    InputProps={{
      classes: {
          input: classes.multilineColor,
         
      }
  }}
    />
</>
} 

InputSearchCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(InputSearchCard)