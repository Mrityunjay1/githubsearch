import { ChakraProvider, theme, Box, Flex, Input, Button ,SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'
import UseGithubUser from './Hooks/UseGithubUser'
import Profile from './Components/Profile'
import Repo from './Components/Repo'
function App() {
  const [valid, setValid] = useState(true);
  const [username, setusername] = useState(true);
  const { user, repos, getUser } = UseGithubUser();

  return (
    <ChakraProvider theme={theme} minHeight='100vh'>
      <Flex direction="column">
        <Box as="header">
          <Flex as="form" paddingY={4} maxWidth={768} marginX="auto" gridGap={4} onSubmit={handleSubmit}>
            <Input placeholder="Enter username" onChange={(e) => setusername(e.target.value)} isInvalid={!valid} />
            <Button type="submit" colorScheme="blue">Search</Button>
          </Flex>
        </Box>
        <Flex as="main" align="center" justify="center" direction="column" flex={1} background="whitesmoke">{user && <Profile name={user.name} image={user.avatar_url} bio={user.bio} />}
          {repos && (
            <SimpleGrid columns={3} spacing={7} marginTop={6}>
              {repos.map(repo => {
                return <Repo key={repo.id}{...repo}/>;
              })}
            </SimpleGrid>
          )}
        </Flex>
      </Flex>
    </ChakraProvider>
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      setValid(false)
      alert("Enter username")
    }
    getUser(username);
  }
}

export default App;
