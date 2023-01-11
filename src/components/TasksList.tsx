import { Task } from './Task'
import { VStack, StackDivider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

interface IProps {
    messageList: string[];
    onChange: (e: any) => void;
}

let completedTemp = 0;

export const TasksList: React.FC<IProps> = (props) => {
    
    const [tasks, setTasks] = useState<String[]>([]);
    const [completed, setCompleted] = useState(0);

    useEffect(() => {

        setTasks(props.messageList);
        console.log(tasks);

    });

    
    return(
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={0}
        align='stretch'
        >
           {tasks.map((task,index) => {
                    return <Task name={task} key={ index } id = { "check"+index.toString() } onChange = { props.onChange } />
                })}
        
        </VStack>
    )
}