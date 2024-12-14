import { Center, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
export const Header = () => {

    const context = useContext(AppContext)
    console.log('Retorno do Header', context)

    return (
        <Center bg="bg.emphasized" h="50px" >
            <Text textStyle="xl" fontWeight="medium">
                Dio Bank
            </Text>
        </Center>
    )
}