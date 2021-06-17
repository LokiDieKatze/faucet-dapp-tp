import { useContext, useState } from "react";
import { Web3Context } from "web3-hooks";
import { FaucetContext } from "./App";
import {
  Box,
  Center,
  Heading,
  Stack,
  Button,
  Grid,
  GridItem,
  Input,
  InputLeftAddon,
  InputGroup,
  Text,
  Spacer,
  Image,
} from "@chakra-ui/react";

function Dapp() {
  const [web3State, login] = useContext(Web3Context);
  const faucet = useContext(FaucetContext);
  const [erc20, setErc20] = useState(false);
  // gestion des getteurs de l'erc20
  const [owner, setOwner] = useState("");
  const [spender, setSpender] = useState("");
  //gestion des erreurs
  //const [error, setError] = useState("");
  const [balance, setBalance] = useState(null);
  console.log(owner);
  console.log(spender);
  const handleChange = (e) => {
    e.target.id === "owner"
      ? setOwner(e.target.value)
      : setSpender(e.target.value);
    console.log(e.target.value);
  };
  // const handleClickAllowance = () => {
  //   !isAddress(owner) && setError('not a valid address')
  //   !isAddress(spender) && setError("not a valid address");
  // }

  const handleClickSendToken = async () => {
    try {
      console.log(balance);
      await faucet.sendToken();
      const tx = await faucet.balanceOf();
      setBalance(tx.toString());
      console.log(balance);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {erc20 ? (
        <Box h="100vh" bg="#181818">
          <Center bg="salmon" h="10vh">
            <Spacer />
            <Image src="logo_small.png" alt="SGSA" />
            <Spacer />
            <Heading color="white">SAGISTAMI FAUCET</Heading>
            <Spacer />
            <Button
              bg="#181818"
              color="grey"
              onClick={() => setErc20(false)}
              pe={5}
            >
              Token
            </Button>
            <Spacer />
          </Center>
          <Center h="80vh">
            <Box w="60%" h="40%">
              <Text color="white" fontSize="6xl">
                {" "}
                Welcome to our Faucet
              </Text>
              <Text color="white" fontSize="2xl">
                For buy 100 SGSA click on "Token" !
              </Text>
            </Box>
            <Image src="logo_large.png" />
          </Center>
          <Center pos="relative" bg="salmon" h="10vh">
            <Heading color="white">Footer</Heading>
          </Center>
        </Box>
      ) : (
        <Box h="100vh" bg="#181818">
          <Center bg="salmon" h="10vh">
            <Spacer />
            <Image src="logo_small.png" alt="SGSA" />
            <Spacer />
            <Heading color="white">SAGISTAMI FAUCET</Heading>
            <Spacer />
            <Button
              bg="#181818"
              color="grey"
              onClick={() => setErc20(true)}
              pe={5}
            >
              Faucet
            </Button>
            <Spacer />
          </Center>
          <Center h="80vh">
            <Grid
              h="200px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={4}
            ></Grid>
            <GridItem rowSpan={2} colSpan={1} bg="lightGrey" p={5} rounded="md">
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
            </GridItem>
            <Button bg="#3399FF" m={5} onClick={handleClickSendToken}>
              sendToken
            </Button>
            <GridItem rowSpan={2} colSpan={1}>
              <Text color="white" as="samp">
                Balance: {balance}
              </Text>
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftAddon bg="salmon" children="owner" />
                  <Input
                    type="text"
                    id="owner"
                    placeholder="address owner"
                    onChange={handleChange}
                  />
                </InputGroup>

                <InputGroup>
                  <InputLeftAddon bg="salmon" children="spender" />
                  <Input
                    type="text"
                    id="spender"
                    placeholder="address spender"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Stack>
            </GridItem>
          </Center>
          <Center pos="relative" bg="salmon" h="10vh">
            <Heading color="white">Footer</Heading>
          </Center>
        </Box>
      )}
    </>
  );
}

export default Dapp;
