import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Box, styled } from '@mui/material';

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Teams from './components/Teams';
import CreateRoom from './components/CreateRoom';
import JoinRoom from './components/JoinRoom';
import HowToPlay from './components/HowToPlay';
import AuctionRoom from './components/AuctionRoom';

const Main = styled(Box)`
    display: flex;
    background-color: rgb(211, 234, 255);
`

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main>
        <Sidebar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/teams" element={ <Teams /> } />
          <Route path="/createRoom" element={ <CreateRoom /> } />
          <Route path="/joinRoom" element={ <JoinRoom /> } />
          <Route path="/howToPlay" element={ <HowToPlay /> } />
          <Route path="/auctionRoom" element={ <AuctionRoom /> } />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
