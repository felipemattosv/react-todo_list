import { Checkbox } from "@chakra-ui/react"

interface TaskProps {
    name: String;
    id: string;
}

export function Task(props: TaskProps) {
    return (
        <Checkbox
        bg="gray.700"
        padding="3"
        spacing='1rem'
        color="gray.50"
        id = {props.id}
        >
            {props.name}
        </Checkbox>
    )
}