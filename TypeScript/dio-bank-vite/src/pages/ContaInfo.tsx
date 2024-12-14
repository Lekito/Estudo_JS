import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ContaInfo = () => {
    return (
        <>
            <Text fontSize="3xl" fontWeight="bold">
                Informações da conta
            </Text>
            {/**Iso abaixo é melhor */}
            <Link to='/conta/1'>
                <Text fontSize="xl">
                    Conta
                </Text>
            </Link>
            {/** Iso a baixo é pior! Faz a pagina ser carrega novamente, consumindo a api novamente 
            <a href="/conta/1">
                Link com tag <a></a>
            </a>
            */}

        </>
    )
}

export default ContaInfo