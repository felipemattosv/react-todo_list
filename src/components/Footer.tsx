import { Flex, Divider, Text, Button } from "@chakra-ui/react" 

interface FooterProps {
    itemsLeft: number;
}

export function Footer(props: FooterProps) {
    return(
        <Flex
            flexDir='column'
            bg="gray.700"
            borderBottomRadius="3"
        >
            <Divider colorScheme="gray.200"/>
            <Flex align="center" justify="space-between">
                <Text padding="2" fontSize="12">{ props.itemsLeft } items left</Text>
                <Flex justify="space-between">
                    <Button fontSize="10" variant='unstyled' >All</Button>
                    <Button fontSize="10" variant='unstyled' >Active</Button>
                    <Button fontSize="10" variant='unstyled' >Completed</Button>
                </Flex>
                <Button fontSize="12" variant="ghost">Clear completed</Button>
            </Flex>
        </Flex>
    )
}
