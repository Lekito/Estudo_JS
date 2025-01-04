import { BrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AppContextProvider } from './components/AppContext'
import MainRoutes from './routes'
import { createLocalStorage, getAllLocalStorage } from './services/storage'

function App() {

  if (!getAllLocalStorage()) {
    createLocalStorage()
  }

  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
