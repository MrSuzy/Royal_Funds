"use client";

import React from 'react';
// import { useReadContract } from "thirdweb/react";
import { useReadContract } from 'wagmi';
import { contract } from "./contractConfig";

function ProjectCounter() {
    const contractAddress = "0xBDD2a83cd25d35192c9F88a8712b9fC1acDbF07a";
    const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"MINIMUM_ETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contributeToMatchingPool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"projectId","type":"uint256"}],"name":"contributeToProject","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contributions","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"details","type":"string"}],"name":"createProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endFundingRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projects","outputs":[{"internalType":"uint256","name":"projectId","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"details","type":"string"},{"internalType":"uint256","name":"contributionCount","type":"uint256"},{"internalType":"uint256","name":"contributedAmount","type":"uint256"},{"internalType":"address","name":"creator","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"roundActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"roundDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"roundStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startFundingRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalMatchingPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userProjects","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

//   const { data, isLoading } = useReadContract({
//     contract, 
//     method: "projectCounter",  // Simplified method name
//     params: [] 
//   });

    const{data, isLoading} = useReadContract({
        contractABI, contractAddress, functionName: "projectCounter",
    })

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      Project Counter: {data ? data.toString() : 'No data available'}
    </div>
  );
}

export default ProjectCounter;
