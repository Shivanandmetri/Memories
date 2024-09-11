import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./Posts";

// Create a QueryClient instance
const queryClient = new QueryClient();

function QueryApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Example</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default QueryApp;
