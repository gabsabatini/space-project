"use client"

import { useState } from "react";
import Header from "./components/header";
import Principal from "./components/principal";
import { OptionContext } from "./contexts/OptionContext";
import { Footer } from "./components/footer";

export default function Home() {

  const [option, setOption] = useState('');

  return (
    <OptionContext.Provider value={{ option, setOption }}>
      <Header />
      <Principal />
      <Footer />
    </OptionContext.Provider>
  );
}
