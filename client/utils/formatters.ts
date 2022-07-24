export const truncate = (str: string, length: number): string => {
    let dots = str.length > length ? '...' : '';
    return str.substring(0, length) + dots;
};

