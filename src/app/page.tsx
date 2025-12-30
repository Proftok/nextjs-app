import { fetchStrapiAPI } from "@/lib/strapi";
import { Page } from "@/lib/types";

export const revalidate = 60; // ISR

async function getHomepageData() {
    try {
        // Attempt to fetch homepage data. 
        // Assuming a singleton 'homepage' content type or similar structure
        const data = await fetchStrapiAPI("/homepage", {
            populate: "*",
        });
        return data?.data as Page;
    } catch (error) {
        // If Strapi is not connected or homepage type doesn't exist, generic object
        console.warn("Could not fetch remote homepage data, using fallback.");
        // Returning null to show fallback UI or default content
        return null;
    }
}

export default async function Home() {
    const pageData = await getHomepageData();

    if (!pageData) {
        return (
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Welcome to Next.js + Strapi
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    The Strapi backend is not yet fully configured or reachable.
                    Deployment is successful!
                </p>
            </div>
        );
    }

    const { title, description, content } = pageData.attributes;

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <article className="prose lg:prose-xl dark:prose-invert mx-auto">
                <h1>{title}</h1>
                {description && <p className="lead">{description}</p>}
                {/* Simple content rendering - in real app use React Markdown */}
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </div>
    );
}
