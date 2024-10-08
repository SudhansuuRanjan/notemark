import { notesMock } from '@/store/mocks'
import { NotePreview } from './NotePreview'
import { useState } from 'react'

export const NotePreviewList = (): JSX.Element => {
    const [selected,setSelected] = useState<number | null>(null)

    return (
        <ul className='flex flex-col gap-2 mt-5'>
            {notesMock.map((note, index) => (
                <NotePreview
                    key={note.title + note.lastEditTime}
                    isActive={selected === index}
                    onClick={() => setSelected(index)}
                    {...note}
                />
            ))}
        </ul>
    )
}