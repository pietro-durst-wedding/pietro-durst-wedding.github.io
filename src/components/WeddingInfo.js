import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export default function WeddingInfo(props) {
  return (
    <Box
      className='center-info-container-wedding-info'
    >
      <div className='wedding-info-left-side'>
        <div className='wedding-info-venue-container'>
          <Container>
          <Paper
            component="img"
            className='wedding-info-venue-img'
            elevation={3} 
            src={require('../images/curtiss_mansion_venue.jpeg')}
          />
          </Container>
     
        </div>
        <div className='wedding-info-basic-info-container'>
        <Paper
          display= "inline-block"
          style={{display: 'inline-block'}}
          className='wedding-info'
          elevation={5} 
          >
            <div className='wedding-info-container'>
              <div className='wedding-info-text-container'>
                <div><strong>Date:</strong> April 29, 2023</div><br/>
                <div><strong>Time:</strong> 6:00PM - 11:00PM </div><br/>
                <div><strong>Venue:</strong> Curtiss Mansion</div><br/>
                <div><strong>Address:</strong> 500 Deer Run, Miami Springs, FL</div><br/>
                <div><strong>Dress code:</strong> Formal 🤵</div><br/>
                <div><strong>Contact:</strong> info@pietri-durst.wedding</div><br/>
                <br/>
              </div>
            </div>
          </Paper> 
        </div>
      </div>
      <div className='wedding-info-right-side'>
        <div className='wedding-info-schedule-container'>
          <div className='wedding-info-schedule'>
            <div className='wedding-info-schedule-text'>
              Insert Schedule Here
            </div>
          </div>
        </div>
      </div>

       
     

      {/* */}


    </Box>
  );
}
