import { Card } from "@/components/Card";
import DButton from "@/components/DButton";
import { login } from "@/services/login";
import { Center, Text, Input } from "@chakra-ui/react";
import { useState } from "react";


const Home = () => {

    const [email, setEmail] = useState<string>('')

    return (
        <Card>
            {/* {userData === null || userData === undefined && <h1 >Loading...</h1>}  */}
            <Center color='#000000'>
                <Text textStyle="2xl" fontWeight="semibold">Faça o login </Text>
            </Center>

            <Input placeholder="email" color='#1a1919' marginTop="30px" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="Senha" marginTop="30px" />
            <Center>
                <DButton onClick={() => login(email)} />
            </Center>
        </Card>
    )
}

export default Home;