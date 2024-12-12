import { Card } from "@/components/Card";
import { Button, Center, Text } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {

    const [value, setValue] = useState(0)

    return (
        <>
            <Card />
            <Center>
                <Text>
                    {value}
                </Text>
                <Button onClick={() => setValue(value + 1)}>
                    Add
                </Button>
                <Button onClick={() => setValue(value - 1)}>
                    Decrease
                </Button>
            </Center>
        </>
    )
}

export default Home;