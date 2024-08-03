import { Box, Flex } from "styled-system/jsx";
import Image from "next/image";
import AiOutlineRight from '@meronex/icons/ai/AiOutlineRight';
import AiOutlineLeft from '@meronex/icons/ai/AiOutlineLeft';

const Produtos = () => {


  return (
    <Box paddingTop="500px">
      
      <Box
        bg="#FBFBF9"
        fontSize="40px"
        fontWeight="800"
        textAlign="center"
        marginTop="40px"
      >
        <h1>Conheça nossos produtos</h1>
      </Box>
      <Flex justifyContent="space-evenly" marginTop="50px" gap="20px">
      <Box fontSize="80px" marginTop="100px" color="#E864F4" _hover={{color: "#4C1654", cursor:"pointer", transform: "translateX(-5px)"}}>
          <AiOutlineLeft></AiOutlineLeft>
        </Box>
        <Box
          padding="20px"
          height="300px"
          boxShadow="0px 5px 5px #808080"
          width="18vw"
          borderRadius="10px"
          textAlign="center"
        >
          <Image src="product.svg" alt="complemento" width={200} height={50} />
        </Box>
        <Box
          padding="20px"
          height="300px"
          boxShadow="0px 5px 5px #808080"
          width="18vw"
          borderRadius="10px"
          fontSize="10px"
          justifyContent="center"
        >
          <Image src="product.svg" alt="produto" width={200} height={50} />
        </Box>
        <Box
          padding="20px"
          height="300px"
          boxShadow="0px 5px 5px #808080"
          width="18vw"
          borderRadius="10px"
          fontSize="10px"
          justifyText="center"
        >
          <Image src="product.svg" alt="produto" width={200} height={50} />
        </Box>
        <Box
          padding="20px"
          height="300px"
          boxShadow="0px 5px 5px #808080"
          width="18vw"
          borderRadius="10px"
          fontSize="10px"
          
        >
          <Image src="product.svg" alt="produto" width={200} height={50} />
        </Box>
        <Box fontSize="80px" marginTop="100px" color="#E864F4" _hover={{color: "#4C1654", cursor:"pointer", transform: "translateX(5px)"}}>
          <AiOutlineRight></AiOutlineRight>
        </Box>
      </Flex>
    </Box>
  );
};
export default Produtos;

