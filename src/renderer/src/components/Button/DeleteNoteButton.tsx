import { ActionButton, ActionButtonProps } from "./ActionButton";
import {FaTrash} from 'react-icons/fa';


export const DeleteNoteButton = ({...props}:ActionButtonProps) => {
    return (
        <ActionButton className="text-rose-500" {...props}>
            <FaTrash/>
        </ActionButton>
    )
}