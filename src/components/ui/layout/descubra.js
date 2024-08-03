import { Box,Flex  } from "styled-system/jsx";
import MdcStarCircleOutline from '@meronex/icons/mdc/MdcStarCircleOutline';

const SeccaoDescubra = () => {
  return(
    <Box>
    <Flex marginBottom="30px" flexDirection="column" textAlign="center" alignItems="center" justifyContent="center"
        color="#0F1B33" style={{ background: 'linear-gradient(180deg, #040406, #808080, #C7C7C6 , #FBFBF9,#FBFBF9,#FBFBF9,#FBFBF9, #FBFBF9 )', height: '50vh' }}>

          
          <Box margin="400px 0px 30px 0px" width="45vw" fontSize="35px" fontWeight="900"  >
            <h1>DESCUBRA COMO </h1>
            <h1>VAMOS AJUDÁ-LO </h1>
          </Box>
          <Box width="35vw" fontSize="12px">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
            tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget  
            nulla facilisi etiam dignissim diam quis. Aliquam sem et tortor  
            consequat id porta nibh venenatis cras. Tempor nec feugiat nisl pretium  fusce id v
            </p>
          </Box>
          <Box   bg="#FBFBF9" margin="100px 0px 50px 0px" >
            <Flex gap="50px">
              <Box height="150px" boxShadow="0px 5px 5px #808080" width="30vw" borderRadius="10px" 
              padding="50px 0px 0px 40px" textAlign="start" fontSize="10px" justifyText="center">
                <MdcStarCircleOutline fontSize="20px" ></MdcStarCircleOutline>
                <h4><b>ENCONTRE NOVOS JOGADORES</b></h4>
                <p>ESTEJA SEMPRE PRONTO PARA RECEBER E JOGAR COM AMIGOS</p>
              </Box>
              <Box height="150px" boxShadow="0px 5px 5px #808080" width="30vw" borderRadius="10px" 
              padding="50px 0px 0px 40px" textAlign="start" fontSize="10px" justifyText="center">
                <MdcStarCircleOutline fontSize="20px" ></MdcStarCircleOutline>
                <h4><b>ENCONTRE NOVOS JOGADORES</b></h4>
                <p>ESTEJA SEMPRE PRONTO PARA RECEBER E JOGAR COM AMIGOS</p>
              </Box>
            </Flex>
           
          </Box>
          <Box  height="100px" bg="#FBFBF9"  >
            <Flex gap="50px" >
            <Box height="150px" boxShadow="0px 5px 5px #808080" width="30vw" borderRadius="10px" 
              padding="50px 0px 0px 40px" textAlign="start" fontSize="10px" justifyText="center">
                <MdcStarCircleOutline fontSize="20px" ></MdcStarCircleOutline>
                <h4><b>ENCONTRE NOVOS JOGADORES</b></h4>
                <p>ESTEJA SEMPRE PRONTO PARA RECEBER E JOGAR COM AMIGOS</p>
              </Box>
              <Box height="150px" boxShadow="0px 5px 5px #808080" width="30vw" borderRadius="10px" 
              padding="50px 0px 0px 40px" textAlign="start" fontSize="10px" justifyText="center">
                <MdcStarCircleOutline fontSize="20px" ></MdcStarCircleOutline>
                <h4><b>ENCONTRE NOVOS JOGADORES</b></h4>
                <p>ESTEJA SEMPRE PRONTO PARA RECEBER E JOGAR COM AMIGOS</p>
              </Box>
            </Flex>
           
          </Box>
        

      </Flex>
  </Box>
  )
  
}
export default SeccaoDescubra;