import { useEffect, useState, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  Tooltip,
  CircularProgress,
  HStack,
} from "@chakra-ui/react";
import { sofaService } from "../service/sofaService";
import { BasketContext } from "../context/BasketContext";
import { AddShoppingCart } from "@styled-icons/material/AddShoppingCart";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../context/ModalContext";
import MainModal from "./Modal";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { LikeContext } from "../context/LikeContext";

const HotSale = () => {
  const { openModal } = useContext(ModalContext);

  const { setProductToStorage } = useContext(BasketContext);
  const { setProductToStoragee } = useContext(LikeContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    sofaService.getProduct().then((response) => setProduct(response.products));
  }, []);

  const addToBasket = (item) => {
    setProductToStorage(item);
  };
  const addToLiked = (item) => {
    setProductToStoragee(item);
  };

  return (
    <Box mt={"35px"}>
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
        {product.map((item) => {
          return (
            <GridItem className="shadow" height={"fit-content"} key={item.id}>
              <Box height={"100%"}>
                <Box position={"absolute"} w={"30px"} h={"30px"} mt={2} ml={2}>
                  <Heart
                    color="#1bc5bd"
                    background="#1bc5bd"
                    width={"20px"}
                    onClick={() => addToLiked(item)}
                  />
                </Box>
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
                          onClick={() => addToBasket(item)}
                        />
                      </Tooltip>
                    </Box>
                  </HStack>
                </VStack>
                <Box display={"flex"} justifyContent={"center"} pb={"10px"}>
                  <Button
                    colorScheme="twitter"
                    background={"#1bc5bd"}
                    color={"white"}
                    onClick={() => openModal(item)}
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
      <MainModal />
    </Box>
  );
};

export default HotSale;
