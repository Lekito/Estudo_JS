import { Box, Flex, HStack } from "@chakra-ui/react"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
    return (
        <HStack>
            <Flex direction="column" minWidth='full'>
                <Header />
                <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                    {children}
                </Box>
            </Flex>
        </HStack>
    )
}