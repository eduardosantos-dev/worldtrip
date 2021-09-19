import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface ContinentSlideProps {
  continent: {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  };
}

export default function ContinentSlide({ continent }: ContinentSlideProps) {
  const { slug, image, title, subtitle } = continent;

  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      bgImage={image}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      textAlign="center">
      <Link href={`/continent/${slug}`}>
        <a>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="light.text"
            fontWeight="bold"
            filter="drop-shadow(0 4px 4px rgba(0,0,0,0.25))">
            {title}
          </Heading>
          <Text
            fontWeight="bold"
            fontSize={["0.8rem", "1xl", "2xl"]}
            mt={["2", "4"]}
            color="light.text"
            filter="drop-shadow(0 4px 4px rgba(0,0,0,0.25))">
            {subtitle}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
