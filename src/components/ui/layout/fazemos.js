import { Box, Flex } from "styled-system/jsx";
import Image from "next/image";
import AiTwotoneDollarCircle from '@meronex/icons/ai/AiTwotoneDollarCircle';
import AiFillCheckSquare from '@meronex/icons/ai/AiFillCheckSquare';
import MdcCheckerboardPlus from '@meronex/icons/mdc/MdcCheckerboardPlus';
import FdLightbulb from '@meronex/icons/fd/FdLightbulb';
import FiTruck from '@meronex/icons/fi/FiTruck';


const Fazemos = () => {
  return (
    <Box>
      <Box
        bg="#FBFBF9"
        fontSize="40px"
        fontWeight="800"
        textAlign="center"
        marginTop="100px"
      >
        <h1>O que fazemos</h1>
      </Box>
      <Flex marginTop="100px" justifyContent="center" gap="50px">
        <Box
          padding="10px"
          border=" 2px solid #E864F4"
          bg="#82358C"
          borderRadius="20px"
          width="250px"
          height="250px"
          fontSize="12px"
          textAlign="center"
          color="white"
          fontWeight="200"
        >
          <Box padding="10px 0px 5px 40px">
          <Image
            
            src="marketplace.svg"
            alt="complemento"
            width={150}
            height={50}
            
          />
          </Box>
          <h4><b>Marketplace</b></h4>
          <p>
          Encontre quem tem aquele acessório bacana, 
          peças personalizadas, miniaturas e mais para pimpar seu jogo!
          </p>
        </Box>
        <Box
          padding="10px"
          border=" 2px solid #E864F4"
          bg="#82358C"
          borderRadius="20px"
          width="250px"
          height="250px"
          fontSize="12px"
          textAlign="center"
          color="white"
          fontWeight="200"
        >
          <Box padding="30px 0px 20px 60px">
          <Image
            
            src="iconSeg.svg"
            alt="complemento"
            width={100}
            height={50}
            
          />
          </Box>
          <h4><b>Securização do acervo</b></h4>
          <p>
          O valor de uma coleção varia, mas sabemos que não é pouca. 
          Mas esteja preparado para evitar o pior!
          </p>
        </Box>
        <Box
          padding="10px"
          border=" 2px solid #E864F4"
          bg="#82358C"
          borderRadius="20px"
          width="250px"
          height="250px"
          fontSize="12px"
          textAlign="center"
          color="white"
          fontWeight="200"
        >
          <Box padding="30px 0px 20px 60px" fontSize="100px" color="#ffffff">
            <AiTwotoneDollarCircle></AiTwotoneDollarCircle>
          </Box>
          <h4><b>Compras no Kickstarter</b></h4>
          <p>
          Logo você poderá usar o pix para comprar aquele lançamento inédito no Kickstarter!
          </p>
        </Box>
        <Box
          padding="10px"
          border=" 2px solid #E864F4"
          bg="#82358C"
          borderRadius="20px"
          width="250px"
          height="250px"
          fontSize="12px"
          textAlign="center"
          color="white"
          fontWeight="200"
        >
          <Box padding="30px 0px 15px 60px"  fontSize="100px">
          <AiFillCheckSquare></AiFillCheckSquare>
          </Box>
          <h4><b>Facilidade para Lojas
          e Locadoras</b></h4>
          <p>
          Desde emprestimos de via cartão para compra de jogos e material para as lojas.
          </p>
        </Box>
      </Flex>
      <Flex marginTop="50px" justifyContent="center" gap="50px">
        <Box
          padding="10px"
          border=" 2px solid #E864F4"
          bg="#82358C"
          borderRadius="20px"
          width="250px"
          height="250px"
          fontSize="12px"
          textAlign="center"
          color="white"
          fontWeight="200"
        >
          <Box padding="30px 10px 5px 60px" fontSize="100px">
          <MdcCheckerboardPlus></MdcCheckerboardPlus>
          </Box>
          <h4><b>Locação de Jogos</b></h4>
          <p>
          Jogue aquele jogo moderno que ouviu falar, tenha diversão com familia e amigos por um custo baixo.
          </p>
        </Box>
        <Box
          padding="10px"
          border=" 2px solid #E864F4"
          bg="#82358C"
          borderRadius="20px"
          width="250px"
          height="250px"
          fontSize="12px"
          textAlign="center"
          color="white"
          fontWeight="200"
        >
          <Box padding="50px 0px 20px 90px" fontSize="100px" >
            <Image src="pawn.svg" width={50} height={50} />
          </Box>
          <h4><b>Tenha sua ludoteca</b></h4>
          <p>
          Se tem uma coleção de jogos, você pode lucrar com eles! Transforme seu acervo num ativo financeiro.
          </p>
        </Box>
        <Box
          padding="10px"
          border=" 2px solid #E864F4"
          bg="#82358C"
          borderRadius="20px"
          width="250px"
          height="250px"
          fontSize="12px"
          textAlign="center"
          color="white"
          fontWeight="200"
        >
          <Box padding="10px 0px 20px 60px" fontSize="100px"> 
          <FdLightbulb></FdLightbulb>
          </Box>
          <h4><b>Diversidade de Jogos</b></h4>
          <p>
          Com vários acervos a sua disposição as chances de conseguir alugar o jogo que você quer são maiores!
          </p>
        </Box>
        <Box
          padding="10px"
          border=" 2px solid #E864F4"
          bg="#82358C"
          borderRadius="20px"
          width="250px"
          height="250px"
          fontSize="12px"
          textAlign="center"
          color="white"
          fontWeight="200"
        >
          <Box padding="15px 0px 20px 60px" fontSize="100px">
          <FiTruck></FiTruck>
          </Box>
          <h4><b>Entrega de Jogo
          em sua casa</b></h4>
          <p>
          Nós temos entregadores treinados para entregar os jogos na sua casa ou onde quiser!
          </p>
        </Box>
      </Flex>
      <Box  width="33vw" margin="50px 0px 200px 500px" >
        
        <Image
            
            src="marcas.svg"
            alt="marcas"
            width={400}
            height={50}
            
          />
      
        </Box>
        
    </Box>
  );
};
export default Fazemos;
