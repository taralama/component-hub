import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { UserDataContextProvider } from '../context/userDataContext';

function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserDataContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        {children}
      </UserDataContextProvider>
    </QueryClientProvider>
  );
}

export default Providers;
