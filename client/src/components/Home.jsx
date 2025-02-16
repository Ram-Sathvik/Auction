import { Box, Button, styled } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../images/logo.jpg';

const Main = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: 1px 4px 7px 6px grey;
    padding: 35px;
    gap: 20px;
`

const Buttons = styled(Button)`
    width: 300px;
    height: 60px;
`

const Image = styled('img') ({
    width: 300,
    borderRadius: 4
})

const Home = () => {

  const navigate = useNavigate();

  return (
    <Main>
      <Container>
          <Image src={logo} />
          <Buttons onClick={() => navigate('/createRoom')} variant='contained'>Create Room</Buttons>
          <Buttons onClick={() => navigate('/joinRoom')} variant='contained'>Join Room</Buttons>
          <Buttons onClick={() => navigate('/howToPlay')} variant='contained'>How To Play</Buttons>
      </Container>
    </Main>
  )
}

export default Home;
