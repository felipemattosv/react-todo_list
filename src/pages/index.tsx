import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from '../components/Header'
import { NewTask } from "../components/NewTask";
import { TasksList } from "../components/TasksList"
import { Footer } from "../components/Footer";
import { useState } from 'react'

const Home: NextPage = () => {

  const [msg,updateMsg] = useState('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log((event.target as HTMLInputElement).value);
            updateMsg((event.target as HTMLInputElement).value);
    }
  };

  return (
    <Flex h="100vh" justify="center" align="center" flexDir='column'>
      <Flex width="100%" maxWidth={360} direction="column">
        <Header />
        <NewTask onKeyDown={handleKeyDown}/>
        <TasksList />
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Home;
