import { api } from "@/api"
import CardInfo from "@/components/CardInfo"
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "@/components/AppContext"


interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}
const Conta = () => {

    const [userData, setUserData] = useState<null | UserData>()
    const actualData = new Date()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)
    console.log('Retorno da pagina Conta', isLoggedIn)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    if (userData && id !== userData.id) {
        navigate('/')
    }

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