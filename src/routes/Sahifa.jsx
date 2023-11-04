import { Center, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Sahifa() {
  return (
    <Container maxW={1400}>
      <Heading>Страница не найдена </Heading>
      <Text py={5}>Мы не смогли найти то, что вы искали.</Text>
      <Text as={'b'}>
        Пожалуйста, свяжитесь с владельцем сайта, с которого вы перешли по URL <br />
        адресу, и дайте знать о сломанной ссылке.
      </Text>
    </Container>
  );
}

export default Sahifa;
