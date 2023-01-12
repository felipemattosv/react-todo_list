import { Checkbox } from "@chakra-ui/react"

interface TaskProps {
    name: string;
    id: string;
    onChange: (e: any) => void;
    check: boolean;
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
        value = {props.name}
        isChecked = { props.check }
        >
            {props.name}
        </Checkbox>
    )
}