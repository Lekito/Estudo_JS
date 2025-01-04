import { AppContext } from "../components/AppContext";
import { Card } from "@/components/Card";
import DButton from "@/components/DButton";
import { login } from "@/services/login";
import { changeLocalStorage } from "@/services/storage";
import { Center, Text, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [email, setEmail] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)
        if (!loggedIn) {
            return alert('Email inválido')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('conta/1')
    }

    return (
        <Card>
            {/* {userData === null || userData === undefined && <h1 >Loading...</h1>}  */}
            <Center color='#000000'>
                <Text textStyle="2xl" fontWeight="semibold">Faça o login </Text>
            </Center>

            <Input placeholder="email" color='#1a1919' marginTop="30px" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="Senha" marginTop="30px" />
            <Center>
                <DButton onClick={() => validateUser(email)} />
            </Center>
        </Card>
    )
}

export default Home;