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

        let completedTemp = 0;

        for(let i = 0; i < tasks.length; i++){
            const check =  document.getElementById("check"+i.toString()) as HTMLInputElement | null;
            if(check?.checked){
                completedTemp+=1;
            }
        }
        console.log(completedTemp);
    });

    return(
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={0}
        align='stretch'
        >
           {tasks.map((task,index) => {
                    return <Task name={task} key={ index } id = { "check"+index.toString() } />
                })}
        
        </VStack>
    )
}
