import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from '../components/Header'
import { NewTask } from "../components/NewTask";
import { TasksList } from "../components/TasksList"
import { Footer } from "../components/Footer";
import React, { useState } from 'react'

const messagesTotal: string[] = [];
let messagesChecked: string[] = [];
let messagesUnchecked: string[] = [];
let checked: boolean[] = [];


const Home: NextPage = () => {

  const [msgUpdate,setMsg] = useState<string[]>([]);
  const [completed, setCompleted] = useState(0);
  const [checkedFinal, setChecked] = useState<boolean[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent) => { //Verifica quando o teclado é clicado para fazer a inserção da task
      if (event.key === 'Enter') {

          let msg = (event.target as HTMLInputElement).value;
          
          if (msg !== "" && !msgUpdate.includes(msg)) {
            
            checked.push(false);
            
            messagesTotal.push(msg);
            messagesUnchecked.push(msg);
            setMsg(messagesTotal);
            setCompleted(completed+1);
            setChecked(checked);
          }
      }
  }

  const handleChange = () => { // Evento onChange verifica quando o checkbox é alterado
      let completedTemp = 0;
      messagesChecked = [];
      messagesUnchecked = [];
      checked = [];

      for(let i = 0; i < messagesTotal.length; i++){

          const check =  document.getElementById("check"+i.toString()) as HTMLInputElement;
          
          if(!check.checked){
              completedTemp+=1;
              messagesUnchecked.push(check.value);
              checked.push(false);
          }else{
              messagesChecked.push(check.value);
              checked.push(true);
          }
      }
      setChecked(checked);
      setCompleted(completedTemp);
      console.log(completedTemp);
      console.log(messagesChecked);
      console.log(messagesUnchecked);

  } //Fim da verificação da CheckBox

  const handleClick = (event: React.PointerEvent) => { //Verificação do clique do botão
    let targetBtn = (event.target as HTMLButtonElement).id;
    if(targetBtn==="allBtn"){ //Verificação se o botão "All" foi clicado
      setMsg(messagesTotal);
      checked = [];

      for(let i = 0; i < messagesTotal.length; i++){
        if(messagesUnchecked.includes(messagesTotal[i])){
          checked.push(false);
        }else{
          checked.push(true);
        }
      }
      setChecked(checked);

    }else if(targetBtn==="activeBtn"){ //Verificação se o botão "Active" foi clicado

      setMsg(messagesUnchecked);
      checked = [];

      for(let i = 0; i < messagesUnchecked.length; i++){
        checked.push(false);
      }
      setChecked(checked);

    }else if(targetBtn==="completedBtn"){ //Verificação se o botão "Completed" foi clicado
      setMsg(messagesChecked);
      checked = [];
      
      for(let i = 0; i < messagesChecked.length; i++){
        checked.push(true);
      }
      setChecked(checked);

    }else if(targetBtn==="clearBtn"){ //Verificação se o botão "Clear completed" foi clicado
      messagesUnchecked = messagesTotal;
      messagesChecked = [];
      setMsg(messagesTotal)
      checked = [];
      
      for(let i = 0; i < messagesTotal.length; i++){
        checked.push(false);
      }
      setChecked(checked);
      setCompleted(messagesTotal.length);
    }
  }
    

  return (
    <Flex h="100vh" justify="center" align="center" flexDir='column'>
      <Flex width="100%" maxWidth={360} direction="column">
        <Header />
        <NewTask onKeyDown={ handleKeyDown }/>
        <TasksList onChange = { handleChange } messageList={ msgUpdate } checked={ checkedFinal }/>
        <Footer buttons={ handleClick } itemsLeft = { completed } />
      </Flex>
    </Flex>
  );
};

export default Home;
