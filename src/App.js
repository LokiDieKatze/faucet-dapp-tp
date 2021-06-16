import React from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { FaucetAddress, FaucetAbi } from "./contracts/faucet";

export const FaucetContext = React.createContext(null);

function App() {
  const faucet = useContract(FaucetAddress, FaucetAbi);

  return (
    <>
      <FaucetContext.Provider value={faucet}>
        <Dapp />
      </FaucetContext.Provider>
    </>
  );
}

export default App;
