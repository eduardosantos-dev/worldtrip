import React from "react";
import { useRouter } from "next/router";
import { Center, Flex, IconButton, Image } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  return (
    <Flex align="center" justify="center" position="relative">
      {router.asPath !== "/" && (
        <IconButton
          icon={<FaChevronLeft />}
          aria-label="Voltar"
          onClick={() => router.push("/")}
          color="dark.text"
          bg="transparent"
          w={[4, 8]}
          h={[4, 8]}
          position="absolute"
          left="4"
          top={["calc(50% - 8px)", "calc(50% - 16px)"]}
        />
      )}
      <Center h={["50px", "100px"]} w="full" color="white">
        <Image h={["20px", "46px"]} w="auto" src="/Logo.svg" alt="World trip" />
      </Center>
    </Flex>
  );
}
