// "use client";

// import React from 'react';
// import { useContractRead, useContract } from "@thirdweb-dev/react";

// import { contract } from "./contractConfig";

// function ProjectCounter() {
//   const { data, isLoading } = useReadContract({
//     contract, 
//     method: "projectCounter",  // Simplified method name
//     params: [] 
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       Project Counter: {data ? data.toString() : 'No data available'}
//     </div>
//   );
// }

// export default ProjectCounter;

"use client";

import React from 'react';
import { useContractRead, useContract } from "@thirdweb-dev/react";
import { contractAddress } from "./contractConfig";

function ProjectCounter() {
  // Initialize the contract using the contract address
  const { contract } = useContract(contractAddress);

  // Read data from the contract using useContractRead
  const { data, isLoading } = useContractRead(contract, "projectCounter");

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }


  // Render the data returned from the contract
  return (
    <div>
      Project Counter: {data ? data.toString() : 'No data available'}
    </div>
  );
}

export default ProjectCounter;