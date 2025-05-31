import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Service pour structurer les réponses API

interface Meta {
    request_id: string;
    api_version: string;
    docs_url: string | null;
    [key: string]: any;
}

export function successResponse(data: any, meta: Partial<Meta> = {}) {
    return {
        success: true,
        timestamp: new Date().toISOString(),
        data,
        error: null,
        meta: {
            request_id: meta.request_id || "",
            api_version: meta.api_version || "v1.0.0",
            docs_url: meta.docs_url ?? null,
            ...meta,
        },
    };
}

export function errorResponse(
    errorObj: { code: string; message: string; details?: any; stack?: any },
    meta: Partial<Meta> = {}
) {
    return {
        success: false,
        timestamp: new Date().toISOString(),
        data: null,
        error: {
            code: errorObj.code,
            message: errorObj.message,
            details: errorObj.details ?? null,
            stack: errorObj.stack ?? null,
        },
        meta: {
            request_id: meta.request_id || "",
            api_version: meta.api_version || "v1.0.0",
            docs_url: meta.docs_url ?? null,
            ...meta,
        },
    };
}
