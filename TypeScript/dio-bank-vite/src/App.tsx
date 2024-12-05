import { HStack, Input, Box, Center, Button } from "@chakra-ui/react"
import { login } from "./services/login"

function App() {


  return (
    <HStack>

      <Box minHeight='100vh' minWidth='full' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor="#ffffff" borderRadius='25px' padding='15px' marginTop="50px" >
          <Center color='#000000'>

            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" marginTop="30px" />
          <Input placeholder="password" marginTop="30px" />
          <Center>

            <Button onClick={login} size="sm" variant="solid" colorPalette="teal" marginTop="30px" width="100%">Button (sm)</Button>
          </Center>
        </Box>
      </Box>

    </HStack>
  )
}

export default App
