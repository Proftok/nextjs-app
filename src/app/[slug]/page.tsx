import { fetchStrapiAPI } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { Page } from "@/lib/types";

export const revalidate = 60;

// Update this interface to match Next.js 15 App Router dynamic route props
interface PageProps {
    params: Promise<{ slug: string }>;
}

async function getPageData(slug: string) {
    try {
        const data = await fetchStrapiAPI("/pages", {
            filters: {
                slug: {
                    $eq: slug,
                },
            },
            populate: "*",
        });

        if (!data?.data || data.data.length === 0) {
            return null;
        }

        return data.data[0] as Page;
    } catch (error) {
        console.error("Error fetching page:", error);
        return null;
    }
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const pageData = await getPageData(slug);

    if (!pageData) {
        return {
            title: 'Page Not Found',
        }
    }

    return {
        title: pageData.title,
        description: pageData.description,
    };
}

export default async function DynamicPage({ params }: PageProps) {
    const { slug } = await params;
    const pageData = await getPageData(slug);

    if (!pageData) {
        notFound();
    }

    const { title, content } = pageData;

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <article className="prose lg:prose-xl dark:prose-invert mx-auto">
                <h1>{title}</h1>
                <div>{content}</div>
            </article>
        </div>
    );
}
