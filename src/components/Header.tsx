import { Center, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Center h={["50px", "100px"]} w="100%" color="white">
      <Image h={["20px", "46px"]} w="auto" src="/Logo.svg" alt="World trip" />
    </Center>
  );
}
