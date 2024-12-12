import { Input, Box, Center, Text } from "@chakra-ui/react"
import { login } from "@/services/login"
import { DButton } from "./DButton"
import { useState, useEffect } from "react"
import { api } from "../api"

interface UserData {
    email: string
    password: string
    name: string
}

export const Card = () => {
    const [email, setEmail] = useState<string>('')
    const [userData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    console.log(userData)
    return (
        <Box backgroundColor="#ffffff" borderRadius='25px' padding='15px' marginTop="50px" color='#000000'>
            {/* {userData === null || userData === undefined && <h1 >Loading...</h1>}  */}
            <Center color='#000000'>
                <Text textStyle="2xl" fontWeight="semibold">Faça o login </Text>
            </Center>
            <Text textStyle="xl" fontWeight="semibold" color='#1a1919'>{userData?.name}</Text>
            <Input placeholder="email" color='#1a1919' marginTop="30px" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="Senha" marginTop="30px" />
            <Center>
                <DButton onClick={() => login(email)} />
            </Center>
        </Box>

    )
}
