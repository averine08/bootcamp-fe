import Link from 'next/link';
import './global.css'; // Ensure global styles are imported


const HomePage = () => {
    return (
        <div>
            <h2>Which project do you like to see ?</h2>
            <div className='flex gap-3 bg-blue-600'>
                <nav>
                    <ul>
                        <li><Link href="/2501981560">Breathholding Exercise</Link></li>
                        <li><Link href="/2501981560/projects/asg-sesi6">API</Link></li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HomePage