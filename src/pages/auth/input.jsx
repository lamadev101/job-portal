import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const Input = ({name, label, handleChange, value, half, autoFocus, type, handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField name={name} value={value.name} onChange={handleChange} variant="outlined" fullWidth required autoComplete='off' label={label} autoFocus={autoFocus} type={type} InputProps={name === 'password' ? {
        endAdornment: (<InputAdornment position='end'>
          <IconButton onClick={handleShowPassword}>
            {type==='password'?<Visibility/>:<VisibilityOff/>}
        </IconButton>
      </InputAdornment>),}:null} />
    </Grid>
  )
}

export default Input