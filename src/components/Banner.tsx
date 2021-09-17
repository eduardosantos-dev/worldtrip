import React from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Image
      objectFit="cover"
      w="100%"
      src={isWideVersion ? "/banner/Banner.svg" : "/banner/Banner_mobile.svg"}
      alt="World trip"
    />
  );
}
