import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <App />
      </JotaiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
