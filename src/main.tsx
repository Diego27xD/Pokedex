import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "react-query"
import "./index.css"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </QueryClientProvider>
  
)