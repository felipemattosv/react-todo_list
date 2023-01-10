import { Task } from './Task'
import { VStack, StackDivider } from '@chakra-ui/react'

export function TasksList() {
    return(
        
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={0}
        align='stretch'
        >
        <Task />
        <Task />
        <Task />
        </VStack>
    )
}