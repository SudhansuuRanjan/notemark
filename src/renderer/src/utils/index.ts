import clsx, { ClassValue } from 'clsx';
import { twMerge } from "tailwind-merge";

const dateFormatter = new Intl.DateTimeFormat(window.context.locale, {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'IST' // Indian Standard Time
});


export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...classes: ClassValue[]): string => {
    return twMerge(clsx(...classes));
}