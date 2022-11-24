import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Netflix from './pages/Netflix';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/blog', element: <Blog /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/netflix', element: <Netflix /> },
  { path: '/slider', element: <Slider /> },
]);

root.render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);
