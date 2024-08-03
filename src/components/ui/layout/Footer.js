import { Box, Flex } from "styled-system/jsx";
import Image from "next/image";
import { Input, Button } from "~/components/ui/primitives";
import LgFacebook from '@meronex/icons/lg/LgFacebook';
import GrTwitter from '@meronex/icons/gr/GrTwitter';
import GrLinkedin from '@meronex/icons/gr/GrLinkedin';
import GrYoutube from '@meronex/icons/gr/GrYoutube';


const Footer = () => {
  return (
    <Box backgroundImage="linear-gradient(to bottom, black 30% , gray)">
      <Flex padding="60px" justifyContent="space-between">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginLeft="60px"
          gap="30px"
        >
          <Image src="/image.png" alt="logo" width={100} height={100} />
          <Box color="white" textAlign="center" fontSize="26px">
            Inscreva-Se na Nossa Newsletter
          </Box>
          <Input
            bg="gray"
            border="1px solid"
            borderRadius="10px"
            margin="5px"
            textAlign="center"
            placeholder="Coloque seu e-mail aqui"
            _placeholder={{
              color: "#A6A4B6",
              fontSize: "12px",
              textAlign: "center",
            }}
          />
          <Button
            variant="outline"
            margin="5px"
            borderRadius="10px"
            color="#ffffff"
            borderColor="#E864F4"
            bg="#4C1654"
            width="150px"
            _hover={{
              boxShadow: "5px 5px 3px #4C1654",
              transitionDuration: "0.5s",
              border: "2px solid #E864F4",
              color: "#E864F4",
            }}
          >
            {" "}
            Cadastrar{" "}
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          border="2px solid #E864F4 "
          borderRadius="20px"
          alignItems="center"
          justifyContent="center"
          bg="#82358C"
          
          marginRight="60px"
        >
         
          <Image
            src="/folderdownload.svg"
            alt="folderdownload"
            width={100}
            height={100}
          />
         
          
          <Box color="white" textAlign="center" width="30vw" fontSize="20px">
            <Box  padding="20px">Baixe Nosso App E Tenha Uma Experiência Ainda Mais Imersiva!</Box>
          </Box>
          <Button
            variant="outline"
            margin="5px"
            borderRadius="10px"
            color="#ffffff"
            borderColor="#189D8C"
            bg="#189D8C"
            width="150px"
            _hover={{
              transform: "translateY(-2px)",
              transitionDuration: "0.5s",
              
              color: "#E864F4",
            }}
          >
            {" "}
            Baixar App{" "}
          </Button>
        </Flex>
      </Flex>
      <Flex  margin="20px 100px 0px 100px" justifyContent="space-between" borderBottom="2px solid #000000"> 
            <Flex paddingBottom="10px">
              <Image src="/image.png" alt="logo" width={80} height={80}  />
              </Flex>
            <Flex paddingBottom="10px" fontSize="40px" alignItems="end" gap="20px" >
              <Flex><LgFacebook></LgFacebook></Flex>
              <Flex><GrTwitter></GrTwitter></Flex>
              <Flex><GrLinkedin></GrLinkedin></Flex>
              <Flex><GrYoutube></GrYoutube></Flex>
            </Flex>
            
      </Flex>
      <Box textAlign="center" color="white" padding="20px " fontWeight="700" >
        <h3>© Copyright 2024</h3>
      </Box>
    </Box>
  );
};
export default Footer;
