import { Box, Button, styled, TextField } from '@mui/material';
import React from 'react';

import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';


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

const Image = styled('img') ({
    width: 300,
    borderRadius: 4
})

const Input = styled(TextField)`
    background-color: white;
    width: 300px;
    placeholder: Create Password:
`

const Submit = styled(Button)`
    width: 300px;
    height: 50px;
`

const JoinRoom = () => {
  return (
    <Main>
        <Container>
            <Image src={logo} />
            <Input placeholder="Enter Code" />
            <Input placeholder="Enter Team Name" />
            <Input placeholder="Enter Password" />
            <Link to="/auctionRoom">
                <Submit variant="contained">Submit</Submit>
            </Link>
        </Container>
    </Main>
  )
}

export default JoinRoom;
