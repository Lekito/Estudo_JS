import { Button } from "@chakra-ui/react"

interface IDButton {
    onClick: () => void
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