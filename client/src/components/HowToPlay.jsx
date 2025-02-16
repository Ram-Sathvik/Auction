import { Box, styled } from '@mui/material';
import React from 'react';

const Main = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Rules = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 70%;
`

const General = styled(Box)`

`

const Auction = styled(Box)`

`

const HowToPlay = () => {
    return (
        <Main>
            <Rules>
                <General>
                    <h2>General Rules</h2>
                    <ul>
                        <li>One user has to create a room by clicking "Create Room" button</li>
                        <li>A room code is provided. Create a new password for this room and signup</li>
                        <li>Other users can join the room by using room code. Users should enter their team name and password to enter into the Auction Room</li>
                        <li>One room can have a minimum of 4 teams and a maximum of 10 teams</li>
                    </ul>
                </General>
                <Auction>
                    <h2>Auction Rules</h2>
                    <ul>
                        <li>After the auction starts, players will be displayed ramdomly pool-wise.</li>
                        <li>Once a player is displayed, teams can bid on the player by clicking "Bid" button</li>
                        <li>Teams just need to click the bid button, bidding will be automatically done based on the following range</li>
                        <ul>
                            <li>20L to 1Cr -&gt; Increased by 5L</li>
                            <li>1Cr to 2Cr -&gt; Increased by 10L</li>
                            <li>2Cr to 5Cr -&gt; Increased by 20L</li>
                            <li>5Cr above -&gt; Increased by 25L</li>
                        </ul>
                    </ul>
                </Auction>
            </Rules>
        </Main>
    )
}

export default HowToPlay;   
