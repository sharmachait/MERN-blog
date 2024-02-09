import './App.css'
import { Header } from './Header'
import { Layout } from './Layout';
import { Post } from './post'
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { LoginPage } from './pages/LoginPage';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
