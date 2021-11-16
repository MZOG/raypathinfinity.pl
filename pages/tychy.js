import React from 'react'
import Head from 'next/head'
import Footer from '../components/footer'
import {
  Container,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Link,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Box
} from "@chakra-ui/react"



export default function Tychy() {
  const [value, setValue] = React.useState("1")

  return (
    <div>
      <Head>
        <title>Raypath Infinity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.md" mb="20px">
        <Link href="/">Strona główna</Link>

        <Box bg={['red', 'blue', 'pink', 'orange']}>
          elo
        </Box>

        <Heading
          as="h1"
          mb="50px"
          size={['2xl', '3xl']}
          lineHeight="1.2"
          isTruncated
        >
          Tychy
        </Heading>

        <form>
          <FormControl id="name" mb="20px">
            <FormLabel>Imię i nazwisko</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl id="email" mb="20px">
            <FormLabel>E-mail</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl id="email" mb="30px">
            <FormLabel>Imię i nazwisko</FormLabel>
            <Input type="tel" placeholder="739 907 919" />
          </FormControl>

          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="1">First</Radio>
              <Radio value="2">Second</Radio>
              <Radio value="3">Third</Radio>
            </Stack>
          </RadioGroup>

          <Button type="submit" colorScheme="teal" variant="outline">
            Wyślij
          </Button>

        </form>


      </Container>
      <Footer />
    </div>
  )
}