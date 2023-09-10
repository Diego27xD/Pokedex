
export type RequestApi<T> = {
    data: {
        results: T[];
    }
}

export type RequestApiObject<T> = {
    data: T;
}