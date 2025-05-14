import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IndexRoutes from "@/routes/index.routes.tsx";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Add your Clerk Publishable Key to the .env.local file!");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IndexRoutes />
  </StrictMode>,
)
