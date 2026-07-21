import { Toaster } from "./components/ui/Toaster";
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from './lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';

const App = () => {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ScrollToTop />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App