import { Task } from './Task'
import { VStack, StackDivider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

interface IProps {
    messageList: string[];
    checked: boolean[];
    onChange: (e: any) => void;
}

export const TasksList: React.FC<IProps> = (props) => {
    
    const [tasks, setTasks] = useState<string[]>([]);
    const [checked, setChecked] = useState<boolean[]>([]);

    useEffect(() => {

        setChecked(props.checked);
        setTasks(props.messageList);
        console.log(tasks);

    });

    
    return(
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={0}
        align='stretch'
        >
           {tasks.map((task, index) => {
                    return <Task name={task} key={ task } id = { "check"+index.toString() } onChange = { props.onChange } check={checked[index]}/>
                })}
        
        </VStack>
    )
}