import axios from "axios";
import { Apod } from "../types/Apod";

const req = axios.create({
    baseURL: 'https://api.nasa.gov/planetary'
});


export const getApodDay = async ():Promise<Apod> => {
    const resp = await req.get('/apod?api_key=l0LF7al9rbqo8YowcCnu0IBVH3RxlsUS74csAJxP');
    return resp.data;
}

export const getApodDate = async (date: string):Promise<Apod> => {
    const resp = await req.get(`/apod?api_key=l0LF7al9rbqo8YowcCnu0IBVH3RxlsUS74csAJxP&date=${date}`);
    return resp.data;
}