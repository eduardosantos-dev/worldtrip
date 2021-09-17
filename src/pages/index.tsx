import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TripTypes from "../components/TripTypes";
import { Divider } from "@chakra-ui/react";
import ContinentsBanner from "../components/ContinentsBanner";

const Home: NextPage = () => {
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
      <ContinentsBanner />
    </>
  );
};

export default Home;
