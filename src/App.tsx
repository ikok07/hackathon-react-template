import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AppStateProvider from "@/state/app.state.tsx";
import {Outlet} from "react-router";
import {ClerkProvider} from "@clerk/clerk-react";
import {bgBG} from "@clerk/localizations";
import {ToastContainer} from "react-toastify";

const queryClient = new QueryClient();

export default function App() {
  return <ClerkProvider
      localization={bgBG}
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      signInUrl={import.meta.env.VITE_CLERK_SIGN_IN_URL}
      signUpUrl={import.meta.env.VITE_CLERK_SIGN_UP_URL}
      signInFallbackRedirectUrl={import.meta.env.VITE_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL}
      signUpFallbackRedirectUrl={import.meta.env.VITE_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL}
      appearance={{
          variables: {
              colorPrimary: "#009d0b",
          }
      }}
  >
      <QueryClientProvider client={queryClient}>
          <AppStateProvider>
              <Outlet />
              <ToastContainer />
          </AppStateProvider>
      </QueryClientProvider>
  </ClerkProvider>
}