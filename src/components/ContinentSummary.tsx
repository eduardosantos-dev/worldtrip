import { Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ContinentInfo from "./ContinentInfo";

interface ContinentSummaryProps {
  continent: {
    content: string;
    countries_amount: string;
    languages_amount: string;
    cities_amount: string;
  };
}

export default function ContinentSummary({ continent }: ContinentSummaryProps) {
  return (
    <Flex justify="center" mx="auto" my={[8, 20]}>
      <Stack direction={["column", "row"]}>
        <Text
          flex="1"
          fontWeight="400"
          fontSize={["sm", "2xl"]}
          textAlign="justify">
          {continent.content}
        </Text>
        <HStack flex="1" align="center" justify="center" spacing="8">
          <ContinentInfo value={continent.countries_amount} label="países" />
          <ContinentInfo value={continent.languages_amount} label="línguas" />
          <ContinentInfo
            value={continent.cities_amount}
            label="cidades +100"
            tooltipLabel="Cidades entre as 100 mais visitadas do mundo"
          />
        </HStack>
      </Stack>
    </Flex>
  );
}
