import { useContext, useEffect, useState } from "react";
import { LikeContext } from "../context/LikeContext";
import {
  Box,
  Heading,
  Image,
  Text,
  Container,
  Button,
  Grid,
  GridItem,
  VStack,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { AddShoppingCart } from "@styled-icons/material/AddShoppingCart";

const LikePage = () => {
  const { liked,setLiked } = useContext(LikeContext);
    const handleRemove = (id) => {
      const arr =liked.filter((item)=>item.id!==id)
      setLiked(arr)
    };

  return (
   
    <Box mt={"35px"}>
      <Heading fontWeight={"600px"} py={"20px"}>
        Избранные товары
      </Heading>
      {liked.length === 0 && <Heading textAlign={'center'}>Нет избранных товаров</Heading>}

      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",

          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(5,1fr)",
          "2xl": "repeat(6,1fr)",
        }}
        gap={"10px"}
      >
        {liked.map((item) => {
          return (
            <GridItem className="shadow" height={"fit-content"} key={item.id}>
              <Box height={"100%"}>
                {/* <Box position={"absolute"} w={"30px"} h={"30px"} mt={2} ml={2}>
              

                <Heart color="#1bc5bd"width={'20px'}     />
              </Box> */}
                <Box onClick={() => navigate(`/product/${item.id}`)}>
                  <Image
                    src={item.thumbnail}
                    width={"100%"}
                    objectFit={"cover"}
                    height={"250px"}
                  />
                </Box>
                <VStack p={"10px"} alignItems={"start"}>
                  <Heading className="product-card__title" size={"sm"}>
                    {item.title}
                  </Heading>
                  <Text className="product-card__description">
                    {item.description}
                  </Text>
                  <HStack gap={"100%"} px={"10px "}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      // justifyContent={"space-between"}
                      // gap={"100px"}
                    >
                      <Text as={"b"}>${item.price?.toLocaleString()}</Text>
                    </Box>
                    <Box p={"10px"}>
                      <Tooltip
                        label="       в корзину"
                        hasArrow
                        background={"#1bc5bd"}
                      >
                        <AddShoppingCart
                          width={25}
                          height={25}
                          color={"#1bc5bd"}
                          // onClick={() => addToBasket(item)}
                        />
                      </Tooltip>
                    </Box>
                  </HStack>
                </VStack>
                <Box display={"flex"} justifyContent={"center"} pb={"10px"}>
                <Button
                  onClick={() => handleRemove(item.id)}
                  background={"white"}
                >
                  <DeleteIcon color={"red"} fontSize={20} />
                </Button>
              </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
      {/* <MainModal /> */}
    </Box>
  );
};

export default LikePage;
