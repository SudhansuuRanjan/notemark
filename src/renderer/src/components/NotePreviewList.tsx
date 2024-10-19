import { notesMock } from '@/store/mocks'
import { NotePreview } from './NotePreview'
import { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge';

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>): JSX.Element => {
    const [selected, setSelected] = useState<number | null>(null);

    if (notesMock.length === 0) {
        return (
            <ul className={twMerge('text-center p-4', className)} {...props}>
                <h2 className='text-lg font-bold'>No notes found.</h2>
                <p className='text-gray-500 text-sm'>Create a new note to get started.</p>
            </ul>
        )
    }

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