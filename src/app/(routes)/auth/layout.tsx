    import { ReactNode } from 'react'
    import AnimatedBackground from '@/src/components/auth/animated-background'

    export default function AuthLayout({
    children,
    }: {
    children: ReactNode
    }) {
    return (
        <div className="min-h-screen relative w-full h-full">
        <AnimatedBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 w-full">
            {children}
        </div>
        </div>
    )
    }