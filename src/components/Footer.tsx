import { Flex, Divider, Text, Button } from "@chakra-ui/react" 

interface FooterProps {
    itemsLeft: number;
    buttons: (e: any) => void;
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
                    <Button fontSize="10" variant='unstyled' onClick={ props.buttons } id="allBtn">All</Button>
                    <Button fontSize="10" variant='unstyled' onClick={ props.buttons } id="activeBtn" >Active</Button>
                    <Button fontSize="10" variant='unstyled' onClick={ props.buttons } id="completedBtn" >Completed</Button>
                </Flex>
                <Button fontSize="12" variant="ghost" onClick = { props.buttons } id="clearBtn" >Clear completed</Button>
            </Flex>
        </Flex>
    )
}
