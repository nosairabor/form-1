"use client"

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export const QueryProvider = ({children}) =>{
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}