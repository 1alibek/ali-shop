import {
    Box,
    Container,
    Heading,
    Image,
    Text,
    VStack,
    Grid,
  } from "@chakra-ui/react";
  import React from "react";
  import telegram from "../../assets/images/telegram.jpg";
  import youtube from "../../assets/images/youtube.png";
  import instagram from "../../assets/images/instagram.jpg";
  import facebook from "../../assets/images/facebook.png";
  import { Link } from "react-router-dom";
  function Footer() {
    return (
      <Container
        maxW={"1400px"}
        mt={"50px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={{ sm: "center", xl: "space-around" }}
        flexWrap={"wrap"}
        
      >
        <Box p={5}>
          <Heading size="md" color={"#1bc5bd"}>
            О нас
          </Heading>
          <Text py={"20px"}>Пункты выдачи</Text>
          <Text>Вакансии</Text>
        </Box>
        <Box p={5}>
          <Heading size="md" color={"#1bc5bd"}>
            Пользователям
          </Heading>
          <Text py={"20px"}>Связаться с нами</Text>
          <Text>Вопрос - Ответ</Text>
        </Box>
        <Box p={5}>
          <Heading size="md" color={"#1bc5bd"}>
            Для предпринимателей
          </Heading>
          <Text py={"20px"}>Продавайте на Uzum</Text>
          <Text>Вход для продавцов</Text>
        </Box>
        <Box borderRadius={5} p={"10px"}>
          <Heading size={"md"} color={"#1bc5bd"}>
            Ali shop в соцсетях
          </Heading>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            p={3}
            gap={3}
            py={5}
          >
            <Link to="https://web.telegram.org/tursunboyev_web">
              <Image w={"50px"} h={"50px"} src={telegram} />
            </Link>
            <Image w={"50px"} h={"50px"} src={youtube} />
            <Link to="https://www.instagram.com/tursunbayevv.a">
              <Image w={"50px"} h={"50px"} src={instagram} />
            </Link>
            <Image w={"50px"} h={"50px"} src={facebook} />
          </Box>
        </Box>
      </Container>
    );
  }
  
  export default Footer;
  