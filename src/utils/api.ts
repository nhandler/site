import { MethodType } from './types';

const API = 'https://api.hackillinois.org';

export class APIError extends Error {
    status: number;
    type: string;

    constructor({ message, status, type }: { message: string, status: number, type: string }) {
        super(message);
        this.status = status;
        this.type = type;
        this.name = 'APIError';
    }
}

async function request(method: MethodType, endpoint: string, body?: unknown) {
    const response = await fetch(API + endpoint, {
        method,
        headers: {
            Authorization: sessionStorage.getItem('token') || '',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (response.status !== 200) {
        throw new APIError(await response.json());
    }

    return response.json();
}

export function getToken(code: string): Promise<string> {
    return request('POST', '/auth/code/github/', { code }).then((res) => res.token);
}
