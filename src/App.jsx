import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { persistor, store } from './redux/store'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Create from './pages/Create'
import { PersistGate } from 'redux-persist/integration/react'


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/new',
          element: <Create />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}
