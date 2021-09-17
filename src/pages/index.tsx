import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TripTypes from "../components/TripTypes";
import { Divider } from "@chakra-ui/react";
import ContinentsBanner from "../components/ContinentsBanner";
import { api } from "../services/api";

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
  console.log("here");
  const response = await api.get<Continent[]>(`/continents`);
  const continents = response.data;

  return {
    props: { continents },
  };
};
