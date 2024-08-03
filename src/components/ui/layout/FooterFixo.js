import { Box, Flex } from "styled-system/jsx";
import Image from "next/image";
import LgFacebook from '@meronex/icons/lg/LgFacebook';
import GrTwitter from '@meronex/icons/gr/GrTwitter';
import GrLinkedin from '@meronex/icons/gr/GrLinkedin';
import GrYoutube from '@meronex/icons/gr/GrYoutube';
import Link from "next/link";

const FooterFixo = () => {
  return (
    <Box justifyContent="end"
      style={{
      background: "linear-gradient(90deg, #82358C, #230E26)",
      height: "25vh",
    }}>
      <Flex
        borderBottom="2px solid #ffffff"
        boxShadow="0px 4px 4px -4px #b5b5b5"
        margin="0px 60px 0px 60px"
        paddingTop="20px"
     
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex  alignItems="end" gap="20px"  > 
         <Box ><Image src="/image.png" alt="logo" width={80} height={80} /></Box> 
          <Box color="white" fontSize="20px"  width="22vh" fontWeight="600">
            <h3>Sócio Do Tabuleiro</h3>
          </Box>
        </Flex>
        <Flex  fontSize="30px" alignItems="end" gap="20px" >
              <Link href=""><LgFacebook></LgFacebook></Link>
              <Link href=""><GrTwitter></GrTwitter></Link>
              <Link href=""><GrLinkedin></GrLinkedin></Link>
              <Link href=""><GrYoutube></GrYoutube></Link>
        </Flex>
        
      </Flex>
      <Box textAlign="center" color="white" fontSize="18px" fontWeight="600" marginTop="10px" ><h3>© Copyright 2024</h3></Box>
    </Box>
  );
};
export default FooterFixo;
