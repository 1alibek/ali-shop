import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  Input,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  Tooltip,
  CircularProgress,
} from "@chakra-ui/react";
import { AddShoppingCart } from "@styled-icons/material/AddShoppingCart";
const SearchCard = () => {
  return (
    <div>
      {" "}
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
        {state.map((item) => {
          return (
            <GridItem className="shadow" height={"fit-content"} key={item.id}>
              <Box height={"100%"}>
                <Box //onClick={() => navigate(`/product/${item.id}`)}
                >
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
                  <Box display={"flex"} gap={"90px"} px={"10px "}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      gap={"100px"}
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
                  </Box>
                </VStack>
                <Box display={"flex"} justifyContent={"center"} pb={"10px"}>
                  <Button
                    colorScheme="twitter"
                    background={"#1bc5bd"}
                    color={"white"}
                    // onClick={() => openModal(item)}
                    width={"80%"}
                  >
                    купить
                  </Button>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default SearchCard;
