import { Box, Flex } from "styled-system/jsx";
import Image from "next/image";

import Link from "next/link";
import HeroWrapper from './backGround';
import { Button } from "../primitives";


const NavInicial = () => {
  return (
    <Box>
        <HeroWrapper backgroundImage="fundo1.png">
          <Box width="100%" padding="5px 100px 5px 100px">
            <Flex alignItems="end" justifyContent="space-between" width="100%" 
            borderBottom="2px solid #4C1654" boxShadow="0px 5px 5px Black" >
              <Box padding="10px 0px 10px 30px">
              <Link href=""><Image src="/image.png" alt="logo" width={60} height={60}/></Link>
              </Box>
              <Box padding="10px 30px 10px 0px" color="white"   >
                
                <ul   >
                <Flex gap="15px">
                  <Box _hover={{color:"gray"}}> 
                    <li>
                      <Link  href="">Marketplace</Link>
                    </li>
                  </Box>
                  <Box _hover={{color:"gray"}}> 
                    <li>
                      <Link href="">Produtos</Link>
                    </li>
                    </Box>
                    <Box _hover={{color:"gray"}}> 
                    <li>
                      <Link href="">Sobre Nós</Link>
                    </li>
                    </Box>
                    <Box _hover={{color:"gray"}}> 
                    <li>
                      <Link href="">Contato</Link>
                    </li>
                    </Box>
                    </Flex>
                  </ul>
                
                
              </Box>
                    
          
            </Flex>
              <Flex alignItems="center" justifyContent="center" marginTop="100px" gap="150px">
                <Box color="white"  >
                  <Box fontSize="30px" fontWeight="700" ><h2>CONECTE-SE COM  O</h2></Box>
                  <Box fontSize="50px" fontWeight="700" ><h1>SÓCIO DO TABULEIRO</h1></Box>
                  <Box width="42vw" fontSize="14px" fontWeight="200">
                    <p>Nascida em 2023, a empresa Sócio do Tabuleiro atua no mercado de Entretenimento e Lazer, 
                      democratizando o acesso a jogos analógicos através do compartilhamento de acervos, 
                      intermediando a locação entre: jogadores e colecionadores, bem como ludotecas para que 
                      mais pessoas vivam as experiências divertidas e construtivas do universo dos “Jogos de Tabuleiro” 
                      ou “board games</p>
                  </Box>
                  

                    <Button  variant="outline"
                        marginTop="50px"
                        borderRadius="10px"
                        color="#ffffff"
                        borderColor="#E864F4"
                        bg="#4C1654"
                        width="150px"
                        fontSize="18px"
                        _hover={{
                          boxShadow: "-2px 2px 3px #4C1654",
                          transitionDuration: "0.5s",
                          border: "2px solid #E864F4",
                          color: "#E864F4",
                        }}
                      >
                        {" "}
                        Market Place{" "}
                      </Button>
                </Box>
                  <Box >
                    <Image src="/complemento.png" alt="complemento" width={300} height={50}/>
                  </Box>
              </Flex>
              
                  
          </Box>
          
        
      </HeroWrapper>

     
        
    </Box>
  );
};
export default NavInicial;

