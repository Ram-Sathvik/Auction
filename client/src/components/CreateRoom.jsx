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

const CreateRoom = () => {

    let a = Math.floor(Math.random()*100) + 1;

    return (
        <Main>
            <Container>
                <Image src={logo} />
                <Box>Room Code: {a}</Box>
                <Input placeholder="Enter Team Name" />
                <Input placeholder="Create Password" type="password" />
                <Input placeholder="Re-Enter Password" type="password" />
                <Link to='/auctionRoom'>
                    <Submit variant="contained">Submit</Submit>
                </Link>
            </Container>
        </Main>
    )
}

export default CreateRoom;
