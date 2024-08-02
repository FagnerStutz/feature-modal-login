import { Box, Flex, Stack } from "styled-system/jsx";
import { Button, Input, Card, Text, Link } from "../primitives";

const Login = () => {
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
        
        <Text 
        fontWeight="800" 
        fontSize="xl" 
        color="rgba(249, 178, 51, 1)"
        >FAZER LOGIN</Text>

        <Stack 
        gap="4"
        py="6"
        >
            
              <Input
              borderRadius="8"
              id="email" 
              placeholder="E-mail" 
              />
            
              <Input 
              borderRadius="8"
              id="password" 
              type="password" 
              placeholder="Senha" 
              />
          
        </Stack>

        <Button 
        borderRadius="8"
        fontWeight="700"
        fontSize="20" 
        width="100%" 
        backgroundColor="rgba(249, 178, 51, 1)" 
        >Entrar</Button>

        <Link 
        pl="44"
        pt="1"
        pb="4"
        fontSize="15"
        color="rgba(127, 117, 117, 1)"
        textDecorationColor="rgba(127, 117, 117, 1)"
        
        >Esqueceu a senha ?</Link>

        <hr/>

        <Text 
        textAlign="center"
        pt="6"
        fontSize="15"
        >
          Novo no Sócio do Tabuleiro? 
          <Link 
          fontSize="17"
          fontWeight="700"
          pl="3"
          color="rgb(249, 178, 51)"
          textDecorationColor="rgba(249, 178, 51, 1)"
          >Cadastre-se</Link>

        </Text>   

      </Box>
    </Flex>
  )
};

export default Login;