import { Box, styled, Typography } from '@mui/material';
import React from 'react';

import csk from '../images/csk.avif';
import dc from '../images/dc.avif';
import gt from '../images/gt.avif';
import kkr from '../images/kkr.avif';
import lsg from '../images/lsg.avif';
import mi from '../images/mi.avif';
import pbks from '../images/pbks.avif';
import rr from '../images/rr.avif';
import rcb from '../images/rcb.avif';
import srh from '../images/srh.avif';

const Main = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const UpperBox = styled(Box)`
    display: flex;
    gap: 35px;
`
const LowerBox = styled(Box)`
    display: flex;
    gap: 35px;
`

const TeamBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 2px 7px 5px grey;
    border-radius: 4px;
    cursor: pointer;
    &: hover {
        transform: scale(1.1);
        transition: transform 0.2s ease;
    }
`

const TeamText = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    color: midnightblue;
`

const Image = styled('img')({
    height: 180,
    borderTop: "2px solid midnightblue"
})

const Teams = () => {
    return (
        <Main>
            <UpperBox>
                <TeamBox>
                    <TeamText>CSK</TeamText>
                    <Image src={csk} />
                </TeamBox>
                <TeamBox>
                    <TeamText>DC</TeamText>
                    <Image src={dc} />
                </TeamBox>
                <TeamBox>
                    <TeamText>GT</TeamText>
                    <Image src={gt} />
                </TeamBox>
                <TeamBox>
                    <TeamText>KKR</TeamText>
                    <Image src={kkr} />
                </TeamBox>
                <TeamBox>
                    <TeamText>LSG</TeamText>
                    <Image src={lsg} />
                </TeamBox>
            </UpperBox>
            <LowerBox>
                <TeamBox>
                    <TeamText>MI</TeamText>
                    <Image src={mi} />
                </TeamBox>
                <TeamBox>
                    <TeamText>PBKS</TeamText>
                    <Image src={pbks} />
                </TeamBox>
                <TeamBox>
                    <TeamText>RR</TeamText>
                    <Image src={rr} />
                </TeamBox>
                <TeamBox>
                    <TeamText>RCB</TeamText>
                    <Image src={rcb} />
                </TeamBox>
                <TeamBox>
                    <TeamText>SRH</TeamText>
                    <Image src={srh} />
                </TeamBox>
            </LowerBox>
        </Main>
    )
}

export default Teams;

