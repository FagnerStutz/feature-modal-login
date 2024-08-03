import { Box } from "styled-system/jsx";
import SeccaoDescubra from "~/components/ui/layout/descubra";
import NavInicial from "~/components/ui/layout/navInicial";
import Layout from "~/components/ui/layout/Layout";
import Produtos from "~/components/ui/layout/produtos";
import Fazemos from "~/components/ui/layout/fazemos";
import Footer from "~/components/ui/layout/Footer";



const Home = () => {
  return (
    <Layout>
      
      
      <NavInicial/>
      <SeccaoDescubra/>
      <Produtos/>
      <Fazemos/>
      <Footer/>
    </Layout>
  );
};
export default Home;
