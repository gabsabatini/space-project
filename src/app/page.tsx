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
    if (text.includes('Dia')) {
      setOption('Dia');
    }
  }

  return (
    <main className="main-class">
      <h2>Selecione uma opção:</h2>

      <div className="options">
        <div className="opt" onClick={handleOption}>
          Foto do Dia
        </div>
        <div className="opt" onClick={handleOption}>
          Selecione uma Data

          {date &&(
            <div className="date">
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
          )}

        </div>
      </div>

      {option &&
        <Apod />
      }

    </main>
  );
}
