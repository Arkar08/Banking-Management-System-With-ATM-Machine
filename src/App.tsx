import { Suspense } from "react"
import View from "./routes/View"
import Loading from "./components/Loading/Loading"
import {QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from "./components/ui/sonner"

function App() {

  const queryClient =  new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <View />
        <Toaster />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
