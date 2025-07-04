import './global.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
})
export default function Layout({ children }) {
    
    return (
        <section className="bg-blue-300">
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
                <h1 className='font-bold'>Welcome to Averina Nurdin's Page</h1>
                {children}

            </div>
        </section>

    )
}