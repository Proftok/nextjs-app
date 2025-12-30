'use client';

interface ErrorFallbackProps {
    error: Error;
    reset: () => void;
}

export default function ErrorFallback({ error, reset }: ErrorFallbackProps) {
    return (
        <div className="min-h-[400px] flex items-center justify-center p-4">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Something went wrong!</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    {error.message || 'An unexpected error occurred. Please try again later.'}
                </p>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
