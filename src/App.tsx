import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Router from "./providers/Router";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
