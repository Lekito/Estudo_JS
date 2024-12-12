import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
    onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
    return (
        <Button
            onClick={onClick}
            size="sm"
            variant="solid"
            colorPalette="teal"
            textStyle="md"
            marginTop="30px"
            width="100%"
        >
            Entrar
        </Button>
    )
}

export default DButton