import { useContext, useEffect, useState } from 'react'
import { Web3Context } from 'web3-hooks'
import { FaucetContext } from './App'

function Dapp() {

  const [web3State, login] = useContext(Web3Context)
  const faucet = useContext(FaucetContext)

  const [balance, setBalance] = useState(null)

  /*useEffect(async () => {

  })*/

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
      <p>MetaMask installed: {web3State.isMetaMask ? 'yes' : 'no'}</p>
      <p>Web3: {web3State.isWeb3 ? 'injected' : 'no-injected'}</p>
      <p>logged: {web3State.isLogged ? 'yes' : 'no'}</p>
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
    </>
  )
}

export default Dapp