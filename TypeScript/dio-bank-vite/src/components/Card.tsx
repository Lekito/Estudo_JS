import { HStack, Input, Box, Center, Flex, Text } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { login } from "@/services/login"
import { DButton } from "./DButton"

export const Card = () => {
    return (
        <HStack>
            <Flex direction="column" minWidth='full'>

                <Header />
                <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                    <Box backgroundColor="#ffffff" borderRadius='25px' padding='15px' marginTop="50px" >
                        <Center color='#000000'>

                            <Text textStyle="2xl" fontWeight="semibold">Faça o login</Text>
                        </Center>
                        <Input placeholder="email" marginTop="30px" />
                        <Input placeholder="Senha" marginTop="30px" />
                        <Center>
                            <DButton onClick={login} />
                        </Center>
                    </Box>
                </Box>
            </Flex>

        </HStack>
    )
}
