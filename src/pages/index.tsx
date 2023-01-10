import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from '../components/Header'
import { NewTask } from "../components/NewTask";
import { TasksList } from "../components/TasksList"
import { Footer } from "../components/Footer";
import { useState } from 'react'

const messages: string[] = [];

const Home: NextPage = () => {

  const [msgUpdate,setMsg] = useState('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {

            let msg = (event.target as HTMLInputElement).value;
            
            setMsg(msg);

            if (msg !== "") {
              
              messages.push(msg);
            }
        }
    };

  return (
    <Flex h="100vh" justify="center" align="center" flexDir='column'>
      <Flex width="100%" maxWidth={360} direction="column">
        <Header />
        <NewTask onKeyDown={handleKeyDown}/>
        <TasksList messageList={messages}/>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Home;
