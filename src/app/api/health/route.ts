import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Test Strapi connectivity
        const strapiUrl = process.env.STRAPI_API_URL;
        let strapiStatus = 'disconnected';

        if (strapiUrl) {
            try {
                const response = await fetch(`${strapiUrl}`, {
                    method: 'HEAD',
                    cache: 'no-store'
                });
                strapiStatus = response.ok ? 'connected' : 'disconnected (api error)';
            } catch (e) {
                strapiStatus = 'disconnected (network error)';
            }
        }

        return NextResponse.json({
            status: 'healthy',
            strapi: strapiStatus,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        return NextResponse.json(
            { status: 'unhealthy', error: 'Internal Server Error' },
            { status: 503 }
        );
    }
}
