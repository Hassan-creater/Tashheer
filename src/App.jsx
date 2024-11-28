import Layout from './Layout/Layout.jsx'

import Home from './Pages/Home/Home.jsx'
import Contacts from './Pages/Contact/Contact.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Client from './Pages/Client/Client.jsx';
import Services from "./Pages/Services/Services.jsx";
import Agency from './Pages/Agency/Agency.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path='/clients' element={<Client/>}/>
      <Route path='/services/social Media Marketing' element={<Services/>}/>
      <Route path='/agency' element={<Agency/>} />
      <Route path='/blogs' element={<Blogs/>}/>
    </Route>
  )
)

export default router