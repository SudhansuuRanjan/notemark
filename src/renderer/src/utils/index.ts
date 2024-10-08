import clsx, { ClassValue } from 'clsx';
import { twMerge } from "tailwind-merge";

const dateFormatter = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata' // Indian Standard Time
});


export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...classes: ClassValue[]): string => {
    return twMerge(clsx(...classes));
}