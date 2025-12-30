import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
            <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
                Return Home
            </Link>
        </div>
    );
}
