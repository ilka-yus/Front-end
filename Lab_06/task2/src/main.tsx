import React from 'react'
import ReactDOM from 'react-dom/client'
import { getCourseById } from './data';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      {
         path: 'courses/:id',
         element: <CourseDetail />,
         errorElement: <div>Course not found!</div>,
         loader: async ({ params }) => {
          const course = getCourseById(Number(params.id));
          if (!course) throw new Error();
          return { course };
         }
        },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);