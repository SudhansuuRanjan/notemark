import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";


export const AppLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
    return (
        <main className={twMerge('flex flex-row h-screen', className)} {...props}>
            {children}
        </main>
    )
}


export const SideBar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
    return (
        <aside className={twMerge("w-[250px] h-[100vh] overflow-auto", className)}
            {...props}
        >
            {children}
        </aside>
    )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, children, ...props }, ref) => {
    return (
        <div ref={ref} className={twMerge("flex-1 p-10", className)} {...props}>
            {children}
        </div>
    )
})

Content.displayName = 'Content'