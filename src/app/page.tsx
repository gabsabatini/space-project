"use client"

import { useState } from "react";
import Apod from "./components/apod";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {

  const [option, setOption] = useState('');
  const [date, setDate] = useState<Date | null>(new Date());

  const handleOption = (event: React.MouseEvent<HTMLDivElement>) => {
    const text = event.currentTarget.innerText;
    text.toLocaleUpperCase();
    if (text.includes('DIA')) {
      setOption('day');
    } else {
      setOption('Selecione');
    }
  }

  const handleButton = () => {
    setOption('date');
  }

  const handleVoltar = () => {
    setOption('');
  }

  return (
    <main className="main-class">

      {!(option === 'day' || option === 'date') && (
        <div className="select-options">
          <h2>Selecione uma opção:</h2>
          <div className="options">
            <div className="opt">
              <p onClick={handleOption}>Foto do Dia</p>
            </div>
            <div className="opt">
              <p onClick={handleOption}>Selecione uma Data</p>

              {option === "Selecione" && (
                <div className="date">
                  <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat="dd/MM/yyyy" locale="ptBR"/>
                  <button className="btn-continuar" onClick={handleButton}>Continuar</button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {(option === 'day' || option === 'date') && (
        <div>
        <span onClick={handleVoltar}>Voltar</span>
        <Apod queryType={option} date={date?.toLocaleDateString() ?? ""} />
        </div>
      )}

    </main>
  );
}
