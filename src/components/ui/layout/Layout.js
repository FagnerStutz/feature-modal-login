import { Box } from "styled-system/jsx";
import NavBar from "./NavBar";

import FooterFixo from "./FooterFixo";



const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar/>
      <Box minHeight="100vh"> {children}</Box> 
      <FooterFixo/> 
    </Box>
    
  )
};
export default Layout;
