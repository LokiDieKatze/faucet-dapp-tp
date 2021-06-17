
import { useContext, useEffect, useState } from 'react'
import { Web3Context } from 'web3-hooks'
import { FaucetContext } from './App'
import { Box, Center, Heading, Stack } from "@chakra-ui/react";

function Dapp() {

  const [web3State, login] = useContext(Web3Context)
  const faucet = useContext(FaucetContext)
// gestion des getteurs de l'erc20
const [owner,setOwner] = useState("")
const [spender, setSpender] = useState("");
//gestion des erreurs
  const [error, setError] = useState('')
  const [balance, setBalance] = useState(null)



const handleChange = (e) => {
  e.target.id === "owner" ? setOwner(e.target.value) : setSpender(e.target.value)
  console.log(e.target.value)
}
// const handleClickAllowance = () => {
//   !isAddress(owner) && setError('not a valid address') 
//   !isAddress(spender) && setError("not a valid address"); 
// }


const handleClickSendToken = async () => {
  try {
    console.log(balance)
    await faucet.sendToken()
    const tx = await faucet.balanceOf()
    setBalance(tx.toString())
    console.log(balance)
  } catch (e) {
    console.error(e)
  }
}

  return (
    <>
      <Box h="100vh" bg="black">
        <Center bg="salmon" h="10vh">
          <Heading color="white">SAGISTAMI FAUCET</Heading>
        </Center>
        <Center h="80vh">
          <Box w="20%" h="10%" bg="salmon">

          </Box>
        </Center>
        <Center pos="relative" bg="salmon" h="10vh">
          <Heading color="white">Footer</Heading>
        </Center>
      </Box>
      <p>MetaMask installed: {web3State.isMetaMask ? "yes" : "no"}</p>
      <p>Web3: {web3State.isWeb3 ? "injected" : "no-injected"}</p>
      <p>logged: {web3State.isLogged ? "yes" : "no"}</p>
      {!web3State.isLogged && (
        <>
          <button onClick={login}>login</button>
        </>
      )}
      <p>Network id: {web3State.chainId}</p>
      <p>Network name: {web3State.networkName}</p>
      <p>account: {web3State.account}</p>
      <p>Balance: {web3State.balance}</p>
      <button onClick={handleClickSendToken}>sendToken</button>
      <p>Balance: {balance}</p>

      <label htmlFor="owner">owner</label>
      <input
        id="owner"
        type="text"
        placeHolder="owner address"
        onChange={handleChange}
      ></input>
      <label htmlFor="spender">spender</label>
      <input
        id="spender"
        type="text"
        placeHolder="spender address"
        onChange={handleChange}
      ></input>
      <button onclick={handleClickSendToken}>Call</button>
    </>
  );
}

export default Dapp