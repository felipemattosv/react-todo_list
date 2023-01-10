import { Task } from './Task'
import { VStack, StackDivider } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface IProps {
    messageList: string[];
}

export const TasksList: React.FC<IProps> = (props) => {
    
    const [tasks, setTasks] = useState<String[]>([]);

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
           {tasks.map(task => {
                    return <Task name={task} />
                })}
        
        </VStack>
    )
}
