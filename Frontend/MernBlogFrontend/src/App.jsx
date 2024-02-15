import './App.css'
import { Header } from './Header'
import { Layout } from './Layout';
import { Post } from './post'
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import PostPage from './pages/PostPage';
import EditPage from './pages/EditPage';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useEffect } from 'react';
import { UserContextProvider } from './UserContext';
import CreatePage from './pages/CreatePage';
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/edit/:id' element={<EditPage />} />
        </Route>
      </Routes>
    </UserContextProvider >
  )
}

export default App
