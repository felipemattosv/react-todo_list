import { Flex, Spacer, Text, IconButton } from "@chakra-ui/react"
import { SunIcon } from "@chakra-ui/icons"

export function Header() {
    return(
        <Flex align="center">
            <Text
                as='b'
                fontSize='4xl'
            >
                T    O    D    O
            </Text>
            <Spacer />
            <IconButton
                aria-label='Switch Theme'
                icon={<SunIcon />}
                bg="transparent"
                size="lg"
                variant="ghost"
                _hover={{
                    bg: "transparent"
                }}
            />
        </Flex>
    )
}