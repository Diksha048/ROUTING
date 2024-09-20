import ReactDom from 'react-dom/client';
import Home from './EarthHome/home';
import Astronauts from './Astronauts/astronauts';
import './../src/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDom.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/astronauts',
    element: <Astronauts />,
  },
]);

root.render(
  <RouterProvider router={router} />
);
