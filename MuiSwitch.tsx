import React=require('react');
import { Box, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';


export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked)
  }
  console.log(checked)
  return (
    <Box>
      <FormControlLabel label="Dark mode" control={<Switch size="small" color="secondary" onChange={handleChecked} />}/>
    </Box>
  )
}