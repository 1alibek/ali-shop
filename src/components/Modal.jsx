import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Image,
  Heading,
  Text,
  Box,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

function MainModal() {
  const { open, closeModal, product } = useContext(ModalContext);
  const toast = useToast();

  const buyProduct = () => {
    toast({
      title: `haridingiz uchun raxmat`,
      status: "success",
      isClosable: true,
    });
    closeModal();
  };

  return (
    <>
      <Modal isOpen={open} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Heading textAlign={"center"} size={"lg"} fontWeight={600} my={5}>
              ваше заказ
            </Heading>
            <Box display={"flex"} gap={5}>
              <Box w={"300px"} h={""}>
                <Image
                  src={product.thumbnail}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </Box>
              <Box>
                <Box>
                  <Heading size={"md"} mb={"1px"}>
                    {product.title}
                  </Heading>
                  <Text as={"b"}>${product.price}</Text>
                </Box>
                <Box pt={"5px"}>
                  <Input
                    placeholder="ваше имя *
"
                    mb={"10px"}
                  />
                  <Input
                    placeholder="ваше номер *
  "
                    mb={"10px"}
                  />
                </Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              background={"#1bc5bd"}
              color={"white"}
              w={"100%"}
              px={"20px"}
              colorScheme="twitter"
              onClick={buyProduct}
            >
              купить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default MainModal;
