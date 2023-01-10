import { Input } from '@chakra-ui/react'
import React from 'react';

interface IProps {
    onKeyDown: (e: any) => void;
}

export const NewTask: React.FC<IProps> = (props) => {
    
    return(
        <Input
            type='text'
            variant='unstyled'
            bg="gray.700"
            placeholder="Create a new todo..."
            _placeholder={{ opacity: 1, color: 'gray.500'}}
            _hover={{
                bg: 'gray.800'
            }}
            size="lg"
            padding="3"
            mt="8"
            mb="6"
            shadow="lg"
            borderRadius="3"
            onKeyDown = { props.onKeyDown }
        />
    )
}
