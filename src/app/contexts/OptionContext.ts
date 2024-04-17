import { createContext, useState } from "react";

// type criado para o contexto receber ou uma string ou um valor null inicialmente
type ContextOption = {
    option: string;
    setOption: (s: string) => void;
}

export const OptionContext = createContext<ContextOption | null>(null);