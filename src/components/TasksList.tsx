import { Task } from './Task'
import { VStack, StackDivider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

interface IProps {
    messageList: string[];
    checked: boolean[];
    onChange: (e: any) => void;
}

interface Task {
    taskName: string;
    isChecked: boolean;
}

export const TasksList: React.FC<IProps> = (props) => {
    
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {

        let tasksTemp:Task[] = [];

        for (let i=0; i < props.messageList.length; i++) {

            tasksTemp.push({"taskName": props.messageList[i], "isChecked": props.checked[i]});
        }
        
        console.log(tasks);

        setTasks(tasksTemp);
    });

    
    return(
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={0}
        align='stretch'
        >
           {tasks.map((task, index) => {
                    return <Task name={task.taskName} key={ task.taskName } id = { "check"+index.toString() } onChange = { props.onChange } check={task.isChecked}/>
                })}
        
        </VStack>
    )
}