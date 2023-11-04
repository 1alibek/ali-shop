import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import { Box, Heading, Image, Text, Container, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
// import axios from "axios";
const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);
  console.log(basket);
  const [state, setState] = useState(1);
  // const setIncrease = () => {
  //   // state < 10 ? setState(state + 1) : setState(10);
  //   setState((prevCount) => +1);
  // };
  // const setDecrease = () => {
  //   // state > 1 ? setState(state - 1) : setState(1);
  //   if (state > 1) {
  //     setState((prevCount) => -1);
  //   }
  // };
  const handleRemove = (id) => {
    const arr = basket.filter((item) => item.id !== id);
    setBasket(arr);
  };

  return (
    <Container
      maxW={"1400px"}
      border={"1px solid #1bc5bd"}
      borderRadius={"10px"}
    >
      <Heading p={3} fontWeight={"600px"}>
        Корзина
      </Heading>
      <Box>
        {basket.length === 0 && (
          <Heading textAlign={"center"} py={5}>
            Корзина пуста
          </Heading>
        )}
        {basket.map((item, index) => (
          <Box
            key={index}
            display={{ md: "block", lg: "flex", xl: "flex" }}
            gap={"50px"}
            justifyContent={{ md: "center", lg: "center", xl: "start" }}
            alignItems={"center"}
            m={5}
            borderBottom={"1px solid #1bc5bd"}
            py={5}
          >
            <Box>
              <Image
                src={item.thumbnail}
                width={"300px"}
                height={"auto"}
                objec-fit={"cover"}
              />
            </Box>
            <Box>
              <Heading>{item.title}</Heading>
              <Text className="product-card__description" pt={3}>
                {item.description}
              </Text>
              <Heading size={"md"} pt={3}>
                ${item.price}
              </Heading>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
                pt={10}
              >
                <Button
                  border={"1px solid red"}
                  background={"white"}
                  color={"red"}
                  borderRadius={"150px"}
                  fontSize={16}
                  onClick={() => setDecrease()}
                >
                  -
                </Button>
                <Text>{state}</Text>
                <Button
                  border={"1px solid #1bc5bd"}
                  background={"white"}
                  color={"#1bc5bd"}
                  borderRadius={"150px"}
                  onClick={() => setIncrease()}
                >
                  +
                </Button>
                <Heading size={"md"}>${state}</Heading>
                <Button
                  onClick={() => handleRemove(item.id)}
                  background={"white"}
                >
                  <DeleteIcon color={"red"} fontSize={20} />
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Basket;
