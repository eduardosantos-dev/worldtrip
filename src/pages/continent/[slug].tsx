import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import ContinentSummary from "../../components/ContinentSummary";
import CitiesList from "../../components/CitiesList";
import Head from "next/head";

interface Continent {
  slug: string;
  title: string;
  content: string;
  image: string;
  countries_amount: string;
  languages_amount: string;
  cities_amount: string;
  cities: [
    { name: string; country: string; image: string; country_flag_url: string }
  ];
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>Worldtrip | {continent.title}</title>
      </Head>
      <Header />
      <Flex
        w="100%"
        h={[150, 500]}
        bgImage={`/continents/${continent.slug}.jpg`}
        bgPosition="center"
        bgSize="cover"
        alt="World trip">
        <Flex
          w={1240}
          p="8"
          mx="auto"
          align={["center", "flex-end"]}
          justify={["center", "flex-start"]}>
          <Text
            fontWeight="500"
            fontSize={[28, 48]}
            color="light.text"
            filter="drop-shadow(0 4px 4px rgba(0,0,0,0.25))">
            {continent.title}
          </Text>
        </Flex>
      </Flex>
      <Box p="8" maxW={1240} mx="auto">
        <ContinentSummary continent={continent} />
        <CitiesList cities={continent.cities} />
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<Continent[]>("/continents");
  const continents = response.data;

  const paths = continents.map((continent) => ({
    params: { slug: continent.slug },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { slug } = params;

  const response = await api.get<Continent[]>(`/continents?slug=${slug}`);
  const continent = response.data[0];

  return {
    props: { continent },
  };
};
