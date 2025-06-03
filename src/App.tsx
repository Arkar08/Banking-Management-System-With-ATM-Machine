import { Suspense } from "react"
import View from "./routes/View"
import Loading from "./components/Loading/Loading"
import {QueryClient,QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient =  new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <View />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
