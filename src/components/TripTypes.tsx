import {
  Center,
  Image,
  HStack,
  Flex,
  Text,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";

export default function TripTypes() {
  const tripTypes = [
    {
      label: "vida noturna",
      icon: "/cocktail.svg",
    },
    {
      label: "praia",
      icon: "/surf.svg",
    },
    {
      label: "moderno",
      icon: "/building.svg",
    },
    {
      label: "clássico",
      icon: "/museum.svg",
    },
    {
      label: "e mais...",
      icon: "/earth.svg",
    },
  ];

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Center maxW={1160} mt={["6", "20"]} mx="auto">
      <Flex
        as="section"
        wrap={isWideVersion ? "nowrap" : "wrap"}
        px="4"
        justify="center"
        w={1160}>
        {tripTypes.map((trip) => (
          <Stack key={trip.label} w="50%" mx={[0, "2", "4"]}>
            {isWideVersion && (
              <Image
                w={["30px", "40px", "85px"]}
                objectFit="cover"
                src={trip.icon}
                alt={trip.label}
                mx="auto"
              />
            )}
            <HStack mx="auto" whiteSpace="nowrap" justify="center">
              {!isWideVersion && (
                <Text as="span" fontSize="2.5rem" color="highlight">
                  •
                </Text>
              )}
              <Text
                size="lg"
                fontWeight={["500", "600"]}
                textAlign="center"
                mt="6">
                {trip.label}
              </Text>
            </HStack>
          </Stack>
        ))}
      </Flex>
    </Center>
  );
}
