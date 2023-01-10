import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from '../components/Header'
import { NewTask } from "../components/NewTask";
import { TasksList } from "../components/TasksList"
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" justify="center" align="center">
      <Flex width="100%" maxWidth={360} direction="column">
        <Header />
        <NewTask />
        <TasksList />
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Home;
