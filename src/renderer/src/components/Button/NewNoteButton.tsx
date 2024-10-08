import { ActionButton, ActionButtonProps } from "./ActionButton";


export const NewNoteButton = ({...props}:ActionButtonProps) => {
    return (
        <ActionButton className="text-green-500" {...props}>
            New Note +
        </ActionButton>
    )
}