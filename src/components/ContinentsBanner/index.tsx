import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.scss";
import ContinentSlide from "./ContinentSlide";
import { GetStaticProps } from "next";
import { api } from "../../services/api";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

interface Continent {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
}

interface ContinentsBannerProps {
  continents: Continent[];
}

export default function ContinentsBanner({
  continents,
}: ContinentsBannerProps) {
  return (
    <>
      <Heading fontWeight="500" size="md" textAlign="center">
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>

      <Flex
        w="100%"
        h={[300, 400]}
        maxW={1240}
        mx="auto"
        my={["4", "10"]}
        className={styles.swiperContainer}>
        <Swiper spaceBetween={50} slidesPerView={1} navigation pagination>
          {continents &&
            continents.map((continent) => (
              <SwiperSlide key={continent.slug}>
                <ContinentSlide continent={continent} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Flex>
    </>
  );
}
