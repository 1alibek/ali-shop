import {
  Box,
  Container,
  HStack,
  Image,
  Text,
  Tooltip,
  Heading,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { AddShoppingCart } from "@styled-icons/material/AddShoppingCart";
import { User } from "@styled-icons/boxicons-regular/User";
import BurgerMenu from "./BurgerMenu";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { RepeatIcon, PhoneIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { AuthContext } from "./../../context/AuthContext";
// import { LikeContext } from "../../context/LikeContext";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  Button,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { LikeContext } from "../../context/LikeContext";
const Header = () => {
  const { basket } = useContext(BasketContext);
  // const { like } = useContext(LikeContext);
  const {liked} =useContext(LikeContext)
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const check = () => {
    if (isAuth) {
      localStorage.removeItem("token");
      setIsAuth(false);
    }
  };

  return (
    <Container
      display={"flex"}
      gap={"40px"}
      alignItems={"center"}
      mt={5}
      maxW={"1400px"}
      p={"15px"}
      // justifyContent={'center'}
      justifyContent={"center"}
      boxShadow={"0 3px 4px -2px #e7f2f8"}
      marginBottom={5}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={{ base: "50px", sm: "70px", md: "100px" }}
      >
        <BurgerMenu />

        <Link to={"/"}>
          <Box>
            <Heading size={"lg"}>Ali shop</Heading>
          </Box>
        </Link>
      </Box>
      <Box width={"40%"} display={{ base: "none", sm: "block" }}>
        <SearchInput />
      </Box>
      <Box
        display={{ base: "none", lg: "none", xl: "flex" }}
        alignItems={"center"}
        gap={3}
      >
        <RepeatIcon color={"#1bc5bd"} width={"25px"} height={"25px"} />
        <Heading size={"md"}>Русский</Heading>
      </Box>
      <Box
        display={{ base: "none", lg: "none", xl: "flex" }}
        alignItems={"center"}
        gap={3}
      >
        <PhoneIcon color={"#1bc5bd"} width={"25px"} height={"25px"} />
        <Heading size={"md"}>+998-88 858-82-84</Heading>
      </Box>
      <HStack
        spacing={"20px"}
        display={{ base: "none", md: "flex ", xl: "flex" }}
      >
        <Link to="/like"  style={{ position: "relative" }}>
        <Text
            width={"25px"}
            height={"25px"}
            position={"absolute"}
            top={"-22px"}
            left={"10px"}
            background={"red"}
            color={"#fff"}
            textAlign={"center"}
            borderRadius={100}
          >
            {liked.length}
          </Text>
          <Tooltip label="like" hasArrow background={"#1bc5bd"}>
            <Heart width={20} height={20} color={"#1bc5bd"} />
          </Tooltip>
        </Link>
        <Link to="/basket" style={{ position: "relative" }}>
          <Text
            width={"25px"}
            height={"25px"}
            position={"absolute"}
            top={"-20px"}
            left={"10px"}
            background={"red"}
            color={"#fff"}
            textAlign={"center"}
            borderRadius={100}
          >
            {basket.length}
          </Text>
          <Tooltip label="shop" hasArrow background={"#1bc5bd"}>
            <AddShoppingCart
              width={25}
              height={25}
              position={""}
              color={"#1bc5bd"}
            />
          </Tooltip>
        </Link>

        <Menu >
          <MenuButton as={Button} colorScheme={"white"}>
            <Tooltip label="profile" hasArrow background={"#1bc5bd"}>
              <User width={25} height={25} color={"#1bc5bd"} />
            </Tooltip>
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem>
                <Button onClick={check} background={'white'}color='red'><ExternalLinkIcon />{isAuth ? "Войти" : "login"}</Button>
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
          </MenuList>
        </Menu>
      </HStack>
    </Container>
  );
};

export default Header;
