import { Checkbox } from "@chakra-ui/react"

interface TaskProps {
    name: String;
    id: string;
    onChange: (e: any) => void;
}

export function Task(props: TaskProps) {
    return (
        <Checkbox
        bg="gray.700"
        padding="3"
        spacing='1rem'
        color="gray.50"
        id = {props.id}
        onChange={ props.onChange }
        >
            {props.name}
        </Checkbox>
    )
}