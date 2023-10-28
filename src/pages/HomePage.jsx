import { Container } from "@chakra-ui/react";
import Carousel from "../components/Carousel/Carousel";
import HotSale from "../components/HotSale";
import CardCarousel from "../components/Carousel/CardCarousel";
import CardCarousel2 from "../components/Carousel/CardCarousel2";

const HomePage = () => {
  return (
    <Container maxW={"1400px"} px={"20px"}>
      <Carousel />
<CardCarousel/>
<CardCarousel2/>
      <HotSale />
    </Container>
  );
};
export default HomePage;
