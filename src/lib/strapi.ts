import qs from 'qs';

// Server-side API calls (uses internal Docker network)
export async function fetchStrapiAPI(
    path: string,
    urlParamsObject = {},
    options = {}
) {
    try {
        const mergedOptions = {
            next: { revalidate: 60 },
            headers: {
                'Content-Type': 'application/json',
            },
            ...options,
        };

        const queryString = qs.stringify(urlParamsObject);
        const requestUrl = `${process.env.STRAPI_API_URL}${path}${queryString ? `?${queryString}` : ''
            }`;

        const response = await fetch(requestUrl, mergedOptions);

        if (!response.ok) {
            throw new Error(`Strapi API error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Strapi API Error:', error);
        throw error;
    }
}

// Client-side API calls (uses public URL)
export async function fetchStrapiPublic(
    path: string,
    urlParamsObject = {}
) {
    try {
        const queryString = qs.stringify(urlParamsObject);
        const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}${queryString ? `?${queryString}` : ''
            }`;

        const response = await fetch(requestUrl);

        if (!response.ok) {
            throw new Error(`Strapi API error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Strapi Public API Error:', error);
        throw error;
    }
}

// Helper for image URLs
export function getStrapiMedia(url: string | null) {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace('/api', '')}${url}`;
}
