"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export const Providers = ( {children}:Props ) => {
    //Criando o client do Tansatack
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}