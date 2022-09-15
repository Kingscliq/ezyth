import moment from "moment";

export const truncate = (str: string, length: number): string => {
    let dots = str.length > length ? '...' : '';
    return str.substring(0, length) + dots;
};

export const shorten = (str: string) => `${str.slice(0, 5)}...${str.slice(str.length - 4)}`
export const ethToUsd = (eth: number) => (eth * 1972.95).toFixed(2)

export const getFullDate = (val: string) => {
    let month = moment(val).format('MMMM');
    let day = moment(val).format('D');
    let year = moment(val).format('YYYY');

    return `${month} ${day}, ${year}`;
};
