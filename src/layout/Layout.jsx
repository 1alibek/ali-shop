import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Box, Container } from "@chakra-ui/react";
import SearchInput from "./Header/SearchInput";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
        <Container p={"10px 20px"} display={{ base: "block", sm: "none" }}>
          <SearchInput />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;