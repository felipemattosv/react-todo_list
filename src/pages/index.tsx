import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from '../components/Header'
import { NewTask } from "../components/NewTask";
import { TasksList } from "../components/TasksList"
import { Footer } from "../components/Footer";
import React, { useState } from 'react'

const messages: string[] = [];


const Home: NextPage = () => {

  const [msgUpdate,setMsg] = useState('');
  const [completed, setCompleted] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => { //Verifica quando o teclado é clicado para fazer a inserção da task
      if (event.key === 'Enter') {

          let msg = (event.target as HTMLInputElement).value;
          
          setMsg(msg);

          if (msg !== "") {
            messages.push(msg);
            setCompleted(completed+1);
          }
      }
  }

  const handleChange = () => { // Evento onChange verifica quando o checkbox é alterado
      let completedTemp = 0;

      for(let i = 0; i < messages.length; i++){
          const check =  document.getElementById("check"+i.toString()) as HTMLInputElement | null;
          if(!check?.checked){
              completedTemp+=1;
          }
      }
      
      setCompleted(completedTemp);
      console.log(completedTemp);

  } //Fim da verificação da CheckBox

    

  return (
    <Flex h="100vh" justify="center" align="center" flexDir='column'>
      <Flex width="100%" maxWidth={360} direction="column">
        <Header />
        <NewTask onKeyDown={ handleKeyDown }/>
        <TasksList onChange = { handleChange } messageList={ messages }/>
        <Footer itemsLeft = { completed } />
      </Flex>
    </Flex>
  );
};

export default Home;
