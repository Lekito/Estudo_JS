import { useState } from 'react'
import { Card } from "./components/Card"
import { Button, Center, Text } from "@chakra-ui/react"

function App() {

  const [value, setValue] = useState(0)


  console.log(value)
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

export default App
