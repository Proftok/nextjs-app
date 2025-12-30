import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                            My Website
                        </Link>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                    Home
                                </Link>
                            </li>
                            {/* Add more nav items here */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
