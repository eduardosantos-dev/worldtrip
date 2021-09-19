import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Avatar,
  Icon,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FiFlag } from "react-icons/fi";

interface City {
  name: string;
  country: string;
  image: string;
  country_flag_url: string;
}

interface CitiesListProps {
  cities: City[];
}

export default function CitiesList({ cities }: CitiesListProps) {
  return (
    <>
      <Heading mb="5" fontWeight="500">
        Cidades +100
      </Heading>
      <SimpleGrid columns={[1, 4]} spacing="4">
        {cities.map((city) => (
          <Box
            w={256}
            h={279}
            key={city.name}
            bg="light.white"
            borderWidth={1}
            borderRadius={6}
            borderColor="highlight"
            mx={["auto", 0]}>
            <Image src={city.image} h={173} w="100%" alt={city.name} />
            <Flex p="6" align="center">
              <Flex direction="column" flex="1">
                <Text
                  fontWeight="semibold"
                  color="dark.text"
                  fontSize="xl"
                  fontFamily="barlow">
                  {city.name}
                </Text>
                <Text fontWeight="medium" color="dark.info" fontFamily="barlow">
                  {city.country}
                </Text>
              </Flex>
              <Avatar
                src={city.country_flag_url}
                w={30}
                h={30}
                icon={<Icon as={FiFlag} fontSize="1.5rem" />}
              />
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
