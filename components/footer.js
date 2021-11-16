import { Container, Flex, Link } from "@chakra-ui/layout"
import Image from 'next/image'

const Footer = () => {
  return (
    <Container maxW="container.lg" borderTop="1px" borderColor="#eaeaea" as="footer" mt="50px">
      <Flex justifyContent="center" mt="20px">
        <Link href="https://marcinzogrodnik.pl" isExternal>
          <Image src="/mz.svg" alt="Vercel Logo" width={40} height={20} />
        </Link>
      </Flex>
    </Container>
  )
}

export default Footer;