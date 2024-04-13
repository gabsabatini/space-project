import axios from "axios";
import { Apod } from "../types/Apod";

const req = axios.create({
    baseURL: 'https://api.nasa.gov/planetary'
});

export const getApodDay = async ():Promise<Apod> => {
    const resp = await req.get('/apod?api_key=DEMO_KEY');
    return resp.data;
}

export const getApodDate = async (date: string):Promise<Apod> => {
    const resp = await req.get(`/apod?date=${date}`);
    return resp.data;
}