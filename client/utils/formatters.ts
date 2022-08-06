export const truncate = (str: string, length: number): string => {
    let dots = str.length > length ? '...' : '';
    return str.substring(0, length) + dots;
};

export const shorten = (str: string) => `${str.slice(0, 5)}...${str.slice(str.length - 4)}`

