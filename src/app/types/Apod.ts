export type Apod = {
    copyright: string;
    date: string;
    explanation: string;
    title: string;
    url: string;
}

export type ApodProps = {
    queryType: string;
    date: string;
}