import React from "react";
import { Icon, Stack, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface ContinentInfoProps {
  value: string;
  label: string;
  tooltipLabel?: string;
}

export default function ContinentInfo({
  value,
  label,
  tooltipLabel,
}: ContinentInfoProps) {
  return (
    <Stack textAlign={["left", "center"]} spacing={-2}>
      <Text color="highlight" fontWeight="semibold" fontSize={["2xl", "5xl"]}>
        {value}
      </Text>
      <Stack spacing={2} direction="row" align="center">
        <Text
          color="dark.text"
          fontWeight={["normal", "semibold"]}
          fontSize={["lg", "2xl"]}
          whiteSpace="nowrap">
          {label}
          {tooltipLabel && (
            <Tooltip
              label={tooltipLabel}
              aria-label="A tooltip"
              verticalAlign="baseline">
              <span>
                <Icon ml="4px" as={FiInfo} color="dark.info50" w="4" h="4" />
              </span>
            </Tooltip>
          )}
        </Text>
      </Stack>
    </Stack>
  );
}
