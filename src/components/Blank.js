import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Blank(props) {
  return (
    <Box
      className='center-info-container'
    >
      <Paper
       display= "inline-block"
       style={{display: 'inline-block'}}
       className='wedding-info'
       elevation={5} 
      >
        <div className='wedding-info-container'>
        <h1>{props.title}</h1>
          <div className='wedding-info-text-container'>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
