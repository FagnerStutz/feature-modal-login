import { Box, Flex } from "styled-system/jsx";
import Image from "next/image";
import { Button, Input } from "../primitives";
import BiSupport from "@meronex/icons/bi/BiSupport";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box>
      <Flex
        padding="0px 40px 0px 40px"
        style={{
          background: "linear-gradient(90deg, #82358C, #230E26)",
          height: "16vh",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" gap="40px">
          <Box>
            <Link href="">
              <Image src="/image.png" alt="logo" width={80} height={80} />
            </Link>
          </Box>

          <Input
            width="30vw"
            bg="#662483"
            border="1px solid #E864F4"
            borderRadius="10px"
            margin="5px"
            placeholder="Encontre aqui"
            _placeholder={{
              color: "#A6A4B6",
              fontSize: "12px",
              textAlign: "start",
            }}
          />
        </Flex>
        <Flex gap="15px">
          <Button
            variant="outline"
            borderRadius="10px"
            color="#ffffff"
            borderColor="#E864F4"
            bg="#4C1654"
            width="150px"
            fontSize="15px"
            _hover={{
              boxShadow: "-2px 2px 3px #4C1654",
              transitionDuration: "0.5s",
              border: "2px solid #E864F4",
              color: "#E864F4",
            }}
          >
            {" "}
            Login{" "}
          </Button>

          <Button
            variant="outline"
            borderRadius="10px"
            color="#ffffff"
            borderColor="#E864F4"
            bg="#4C1654"
            width="150px"
            fontSize="15px"
            _hover={{
              boxShadow: "-2px 2px 3px #4C1654",
              transitionDuration: "0.5s",
              border: "2px solid #E864F4",
              color: "#E864F4",
            }}
          >
            {" "}
            Cria Conta{" "}
          </Button>
          <Box
            marginLeft="30px"
            color="white"
            fontSize="50px"
            _hover={{
              transitionDuration: "0.5s",
              color: "#E864F4",
            }}
          >
            <Link href="">
              <BiSupport></BiSupport>
            </Link>
          </Box>
        </Flex>
      </Flex>
      <ul>
        <Flex
          height="40px"
          fontSize="20px"
          bg="#F9B233"
          color="white"
          gap="30px"
          justifyContent="center"
          alignItems="center"
          fontWeight="600"
        >
          <Box
            _hover={{ color: "#4C1654" }}
            borderRight="3px solid #ffffff"
            paddingRight="30px"
            
          >
            <li>
              <Link href="">Marketplace</Link>
            </li>
          </Box>

          <Box
            _hover={{ color: "#4C1654" }}
            borderRight="3px solid #ffffff"
            paddingRight="30px"
          >
            <li>
              <Link href="">Produtos</Link>
            </li>
          </Box>
          <Box
            _hover={{ color: "#4C1654" }}
            borderRight="3px solid #ffffff"
            paddingRight="30px"
          >
            <li>
              <Link href="">Sobre Nós</Link>
            </li>
          </Box>
          <Box _hover={{ color: "#4C1654" }} paddingRight="30px">
            <li>
              <Link href="">Contato</Link>
            </li>
          </Box>
        </Flex>
      </ul>
    </Box>
  );
};
export default NavBar;
