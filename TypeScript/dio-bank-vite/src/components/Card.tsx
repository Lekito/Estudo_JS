import { Input, Box, Center, Text } from "@chakra-ui/react"
import { login } from "@/services/login"
import { DButton } from "./DButton"
import { useState } from "react"



export const Card = () => {
    const [email, setEmail] = useState<string>('')



    return (
        <Box backgroundColor="#ffffff" borderRadius='25px' padding='15px' marginTop="50px" color='#000000'>
            {/* {userData === null || userData === undefined && <h1 >Loading...</h1>}  */}
            <Center color='#000000'>
                <Text textStyle="2xl" fontWeight="semibold">Faça o login </Text>
            </Center>

            <Input placeholder="email" color='#1a1919' marginTop="30px" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="Senha" marginTop="30px" />
            <Center>
                <DButton onClick={() => login(email)} />
            </Center>
        </Box>

    )
}
