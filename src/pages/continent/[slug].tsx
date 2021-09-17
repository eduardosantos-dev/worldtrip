import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { api } from "../../services/api";

interface Continent {
  slug: string;
  title: string;
  content: string;
  image: string;
  countries_amount: number;
  languages_amount: number;
  cities_amount: number;
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />
      <Banner />
      {JSON.stringify(continent)}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { slug } = params;

  const response = await api.get<Continent>(`/continents?slug=${slug}`);
  const continent = response.data;

  return {
    props: { continent },
  };
};
