import { Box, Flex } from "styled-system/jsx";
import Link from "next/link";
import { Title } from "../primitives/alert";
import LgFacebook from '@meronex/icons/lg/LgFacebook';
import GrTwitter from '@meronex/icons/gr/GrTwitter';
import GrLinkedin from '@meronex/icons/gr/GrLinkedin';
import GrYoutube from '@meronex/icons/gr/GrYoutube';



const Contatos = () => {
    return(
        <Flex
        position="fixed"
        borderShadow="lg"
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        zIndex="1000"
        >
            <Box
            p="8"
            borderRadius="lg"
            boxShadow="lg"
            backgroundColor="white"
            width="400px"
            height="380px"
            >
                <Title
                
                >Contate o Sócio do Tabuleiro</Title>

                <Flex>
                
                </Flex>

                <Title>Visite nossas redes Socias</Title>

                <Flex  
                fontSize="30px" 
                alignItems="center" 
                gap="20px" 
                >
                    <Link href=""><LgFacebook></LgFacebook></Link>
                    <Link href=""><GrTwitter></GrTwitter></Link>
                    <Link href=""><GrLinkedin></GrLinkedin></Link>
                    <Link href=""><GrYoutube></GrYoutube></Link>
                </Flex>
            </Box>
        
        </Flex>
    )
};

export default Contatos;