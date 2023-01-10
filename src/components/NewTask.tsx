import { Input } from '@chakra-ui/react'

export function NewTask() {
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
            mt="6"
            mb="4"
            shadow="lg"
            borderRadius="3"
        />
    )
}

