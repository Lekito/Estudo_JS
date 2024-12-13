import { api } from "@/api"
import CardInfo from "@/components/CardInfo"
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
}
const Conta = () => {

    const [userData, setUserData] = useState<null | UserData>()
    const actualData = new Date()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    console.log(userData)
    console.log(actualData)
    return (
        <Center>
            <SimpleGrid columns={2} gap="40px" >
                {
                    userData === undefined || userData === null ?
                        (<Center>
                            <Spinner size="xl" />
                        </Center>) :

                        (
                            <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}: ${actualData.getMinutes()}`} />
                        )
                }

                {
                    userData === undefined || userData === null ?
                        (<></>) :
                        (<CardInfo mainContent="Saldo" content={`R$ ${userData?.balance}`} />)
                }

            </SimpleGrid>

        </Center>
    )
}

export default Conta