import React from "react";
import type { GetStaticProps } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TripTypes from "../components/TripTypes";
import { Divider } from "@chakra-ui/react";
import ContinentsBanner from "../components/ContinentsBanner";
import { api } from "../services/api";
import Continent from "./continent/[slug]";
import Head from "next/head";

interface Continent {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Header />
      <Banner />
      <TripTypes />
      <Divider
        w={["60px", "90px"]}
        colorScheme="pink"
        mx="auto"
        mb="6"
        mt="9"
      />
      <ContinentsBanner continents={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Continent[]>(`/continents`);
  const continents = response.data;

  return {
    props: { continents },
  };
};
