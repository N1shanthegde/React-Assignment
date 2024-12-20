import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import QuizBody from './Components/QuizBody';
import MainBody from './Components/MainBody';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= "/" element={<Home />}>
      <Route path= "" element={<MainBody />} />
      <Route path= "quiz/" element={<QuizBody />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
