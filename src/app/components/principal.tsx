"use client"

import { useContext, useEffect, useState } from "react";
import Apod from "./apod";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { OptionContext } from "../contexts/OptionContext";

const Principal = () => {

    const optionCtx = useContext(OptionContext);
    const [date, setDate] = useState<Date | null>(new Date());

    const handleOption = (event: React.MouseEvent<HTMLDivElement>) => {
        const text = event.currentTarget.innerText;
        text.toLocaleUpperCase();
        if (text.includes('DIA')) {
            optionCtx?.setOption('day');
        } else {
            optionCtx?.setOption('Selecione');
        }
    }

    const verifyOption = () => {
        return optionCtx?.option === 'day' || optionCtx?.option === 'date';
    }

    const handleButton = () => {
        optionCtx?.setOption('date');
    }

    useEffect(() => {
        const bodyClass = document.querySelector('body');
        if (optionCtx?.option === 'day' || optionCtx?.option === 'date') {
            bodyClass?.classList.add('no-home');
        } else {
            bodyClass?.classList.remove('no-home');
        }
    }, [optionCtx?.option]);

    return (
        <main className="main-class">

            {!verifyOption() && (
                <div className="select-options">
                    <h2>Selecione uma opção:</h2>
                    <div className="options">
                        <div className="opt">
                            <p onClick={handleOption}>Foto do Dia</p>
                        </div>
                        <div className="opt">
                            <p onClick={handleOption}>Selecione uma Data</p>
                            {optionCtx?.option === "Selecione" && (
                                <div className="date">
                                    <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat="dd/MM/yyyy" locale="ptBR" />
                                    <button className="btn-continuar" onClick={handleButton}>Continuar</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {verifyOption() && (
                <Apod optionType={optionCtx?.option ?? ""} date={date?.toLocaleDateString() ?? ""} />
            )}

        </main>
    );
}

export default Principal;