import { Box, styled } from '@mui/material';
import React from 'react';

import auction1 from '../images/auction1.jpg';
import auction2 from '../images/auction2.jpg';
import auction3 from '../images/auction3.jpg';

const Side = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 90vh;
    width: 450px;
    box-shadow: 2px 7px 5px 7px grey;
`

const Image = styled('img') ({
    width: 300,
    borderRadius: 4
})

const Sidebar = () => {
  return (
    <Side>
        <Box>
            <Image src={auction1} />            
        </Box>
        <Box>
            <Image src={auction2} />
        </Box>
        <Box>
            <Image src={auction3} />
        </Box>
    </Side>
  )
}

export default Sidebar;











/* <TextBox>
    <Typography>Date: 19th Nov, 2024</Typography>
    <Typography>Time: 03:00 pm IST</Typography>
    <Typography>Venue: Bangalore</Typography>
</TextBox> */