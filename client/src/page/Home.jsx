import React from 'react';
import { PageHOC } from '../components';


const Home = () => {
  return (
    <div>
      <h1 className="text-5xl p-3">Avax Battle</h1>
      <h2 className="text-3xl p-3">Web3 NFT Battle-style Card Game</h2>
      <p className="text-xl p-3">Made by Rey</p>
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to the Arena</>,
  <>Connect your wallet to start playing</>,
  'home'
);