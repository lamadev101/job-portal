import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import GoUp from './components/GoUp';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import NotFound from './pages/404';
import About from './pages/about';
import Contact from './pages/contact';
import Employee from './pages/employee';
import Form from './pages/form';
import Home from './pages/home';
import AddDynamicInput from './pages/textcode';

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
        <GoUp/>
      </>
    )
  }
  
  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about-us", element: <About /> },
        { path: "/contact-us", element: <Contact /> },
        {path:"/form", element:<Form/>},
        {path:"/profile/:id", element:<Employee/>},
        {path:"/test", element:<AddDynamicInput/>},
        {path:"/*", element:<NotFound/>},
      ] 
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
