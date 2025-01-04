import { Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '@/services/storage'
export const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    const logout = () => {
        changeLocalStorage({ login: false })
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <Flex bg="bg.emphasized" padding="5px">

            <Center h="50px" >
                <Text textStyle="xl" fontWeight="medium">
                    Dio Bank
                </Text>
            </Center>

            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={() => logout()}>
                            Sair
                        </Button>
                    </>
                )
            }
        </Flex>
    )
}