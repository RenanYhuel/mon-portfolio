import { errorResponse, successResponse } from "@/lib/utils";
import { prisma } from "@/lib/prismaClient";



export async function GET() {
    const meta = {
        request_id: crypto.randomUUID(),
        api_version: 'v1.0.0',
        docs_url: null,
        endpoint: '/api/test',
    };
    try {
        await prisma.$connect();
        await prisma.$disconnect();
        return Response.json(successResponse(undefined, meta));
    } catch (error) {
        return Response.json(
            errorResponse(
                {
                    code: 'DB_CONNECTION_ERROR',
                    message: error instanceof Error ? error.message : 'Unknown error',
                    stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
                },
                meta
            ),
            { status: 500 }
        );
    }
}
