import {
  Container,
  Heading,
  Image,
  Text,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { sofaService } from "../../service/sofaService";
import { CarOutline } from "@styled-icons/evaicons-outline/CarOutline";
import { CheckCircleIcon } from "@chakra-ui/icons";
const Product = () => {
  const [state, setState] = useState({});
  const { id } = useParams();
  useEffect(() => {
    let data = sofaService.getOneProduct(id);
    data.then((res) => setState(res));
  }, [id]);
  console.log(state);

 
  return (
    <Container maxW="1400px" >
      {!Object.keys(state).length && <Heading>loading</Heading>}
      <Box  display={{sm:'block',md:'block',lg:'flex',xl:'flex'}} gap={"20px"} >
        <Box  display={{sm:'block',md:'block',lg:'flex',xl:'flex'}} gap={"30px"} >

        
        <Box>
          <Image
            src={state.thumbnail}
            width={"100%"}
            height={400}
            objectFit={"cover"}
          />
        </Box>
        <Box pt={"50px"}>
          <Heading>{state.title}</Heading>
          <Text py={"10px"}>{state.description}</Text>
        </Box>
        </Box>
        <Box border={"1px solid gray"} borderRadius={10} px={5}>
          <HStack spacing={"50px"} alignItems={"center"} py={"20px"}>
            <Heading size={"md"}>${state.price?.toLocaleString()}</Heading>
            <Button
              background={"#E8FAF9"}
              color={"#1bc5bd"}
              borderRadius={"50px"}
            >
              <CheckCircleIcon /> В наличии
            </Button>
          </HStack>
          <HStack>
            <CarOutline width={"30px"} color={"#1bc5bd"} />
            <Text>Бесплатная доставка</Text>
          </HStack>
          <Text py={"10px"}>
            Доставка по г.Ташкенту до 24 часов, по <br /> Республике Узбекистан
            до 2 рабочих дней.
          </Text>
          <Box display={"flex"} justifyContent={"center"} py={"20px"}>
            <Button
              background={"#1bc5bd"}
              color={"white"}
              w={"80%"}
            >
              Добавить в корзину
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Product;
