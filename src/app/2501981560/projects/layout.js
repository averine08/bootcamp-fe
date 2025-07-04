
import Link from 'next/link'

export default function ProjectLayout({ children }) {
    
    return (
        <section>
            <nav>
                <ul>
                    <Link href="/2501981560">Breathholding Exercise</Link>
                    <Link href="/2501981560/projects/asg-sesi6">API</Link>
                </ul>
            </nav>
            <h1>Welcome to Averina Nurdin's Page</h1>
            {children}
        </section>

    )
}