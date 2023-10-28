import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Heading, Image } from "@chakra-ui/react";
import logo1 from "../../assets/images/servis1.jpg";
import logo2 from "../../assets/images/servis2.jpg";
import logo3 from "../../assets/images/servis3.jpg";
import logo4 from "../../assets/images/servis4.jpg";
import logo5 from "../../assets/images/servis5.jpg";
import logo6 from "../../assets/images/servis6.jpg";
import './swiper.css';
const CardCarousel2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    // <div>CardCarousel</div>
    <Box my={"30px"}>
      <Heading size={"lg"} fontWeight={"600px"} pb={"5"}>
        Сервисы
      </Heading>
      <Carousel responsive={responsive}>
        <Box>
          <Image
            src={logo6}
            h={"200px"}
            objectFit={"cover"}
            w={"300px"}
            borderRadius={"10px"}
          />
          <Heading textAlign={"center"} size={"md"} fontWeight={"600"} className="hover">
            Онлайн меню для <br /> ресторанов и кафе
          </Heading>
        </Box>
        <Box>
          <Image
            src={logo2}
            h={"200px"}
            objectFit={"cover"}
            w={"300px"}
            borderRadius={"10px"}
          />
          <Heading textAlign={"center"} size={"md"} fontWeight={"600"}className="hover">
            SmartZon - Учет товаров <br /> и услуг
          </Heading>
        </Box>
        <div>
          <Image
            src={logo3}
            h={"200px"}
            objectFit={"cover"}
            w={"300px"}
            borderRadius={"10px"}
          />
          <Heading textAlign={"center"} size={"md"} fontWeight={"600"}className="hover">
            DocZon - Электронный документооборот
          </Heading>
        </div>
        <div>
          <Image
            src={logo4}
            h={"200px"}
            objectFit={"cover"}
            w={"300px"}
            borderRadius={"10px"}
          />
          <Heading textAlign={"center"} size={"md"} fontWeight={"600"}className="hover">
            Мой IP-адрес
          </Heading>
        </div>
        <div>
          <Image
            src={logo5}
            h={"200px"}
            objectFit={"cover"}
            w={"300px"}
            borderRadius={"10px"}
          />
          <Heading textAlign={"center"} size={"md"} fontWeight={"600"}className="hover">
            Банки в Узбекистане
          </Heading>
        </div>
        <div>
          <Image
            src={logo6}
            h={"200px"}
            objectFit={"cover"}
            w={"300px"}
            borderRadius={"10px"}
          />
          <Heading textAlign={"center"} size={"md"} fontWeight={"600"} className="hover">
            образовательные <br /> инструменты
          </Heading>
        </div>
        <div>
          <Image
            src={logo3}
            h={"200px"}
            objectFit={"cover"}
            w={"300px"}
            borderRadius={"10px"}
          />
          <Heading textAlign={"center"} size={"md"} fontWeight={"600"} className="hover">
            DocZon - Электронный документооборот
          </Heading>
        </div>
        <Box>
          <Image
            src={logo1}
            h={"200px"}
            objectFit={"cover"}
            w={"300px"}
            borderRadius={"10px"}
          />
          <Heading textAlign={"center"} size={"md"} fontWeight={"600"}className="hover">
            Сумма и цифры прописью
          </Heading>
        </Box>
      </Carousel>
    </Box>
  );
};

export default CardCarousel2;
