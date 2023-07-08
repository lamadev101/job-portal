// import { RouterProvider, createBrowserRouter, Outlet, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import LoginSignup from "./pages/auth"
import Dashboard from "./pages/dashboard"
// import DesirePost from "./pages/desirepost"
import Details from "./pages/details"
import Viewed from "./pages/resume/viewed"
import New from "./pages/resume/new"
import All from "./pages/resume/all"

import { getToken } from "./utils/localStorage"
// import Hired from "./pages/applicant/hired"
// import Interviewed from "./pages/applicant/interviewed"
import UnderConstruct from "./pages/999"
import { Navigate, Route, Router, Routes } from "react-router-dom"
import { useStateContext } from "./utils/stateContext"
import { useEffect, useState } from "react"


// function App() {
//   // const {access_token} = getToken()
//   // console.log(access_token)
//   const {loggedUser} = useStateContext()
//   console.log(loggedUser)

//   const ProtectedRoute = ({ children }) => {
//     if (loggedUser) {
//       return children;
//     }
//     return <Navigate to="/" />
//   }

//   const Layout = () => {
//     return (
//       <main>
//         <div className='grid grid-cols-6'>
//           <aside className='col-span-1 h-screen bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg sticky top-0'>
//             <Sidebar />
//           </aside>
//           <section className='col-span-5'>
//             <Navbar />
//             <div className="px-8 py-4">
//               <Outlet />
//             </div>
//           </section>
//         </div>
//       </main>
//     )
//   }

//   const router = createBrowserRouter([
//     {
//       children: [
//         { path: "/login", element: < LoginSignup /> }
//       ]
//     },
//     {
//       element: <ProtectedRoute><Layout /></ProtectedRoute>,
//       // element: access_token ? <Layout /> : <Navigate to="/login" />,
//       children: [
//         { path: "/", element: <Dashboard /> },
//         { path: "/all-applications", element: <All /> },
//         { path: "/new-applications", element: <New /> },
//         { path: "/viewed-applications", element: <Viewed /> },
//         { path: "/details/:id", element: <Details /> },
//         // {path: "/desire-post", element:<DesirePost/>},
//         // {path: "/hired", element: <Hired/>},
//         // {path: "/interviewed", element: <Interviewed/>},
//         {path: "/*", element:<UnderConstruct/>}
//       ]
//     }
//   ])
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App

const App = () => {
  const [token, setToken] = useState(true)

  useEffect(() => {
    const { access_token } = getToken()
    access_token ? setToken(true) : setToken(false)
  }, [])

  return (
    <>{1===1 ?
      (<main>
        <div className='grid grid-cols-6'>
          <aside className='col-span-1 h-screen bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg sticky top-0'>
            <Sidebar />
          </aside>
          <section className='col-span-5'>
            <Navbar />
            <div className="px-8 py-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/viewed-applications" element={<Viewed />} />
                <Route path="/new-applications" element={<New />} />
                <Route path="/details/:id" element={<Details />} />
                {/* <Route path="/*" element={<UnderConstruct/>}/> */}
              </Routes>
            </div>
          </section>
        </div>
      </main>) : (
        <Routes>
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>)
    }
    </>
  )
}
export default App