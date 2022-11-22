import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Netflix from './pages/Netflix';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/blog', element: <Blog /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/netflix', element: <Netflix /> },
]);

root.render(
  <StrictMode>
    <nav className="navbar navbar-dark bg-dark">
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>

        <li>
          <a href="/blog">Blog</a>
        </li>

        <li>
          <a href="/portfolio">Portfolio</a>
        </li>

        <li>
          <a href="/netflix">Netflix</a>
        </li>
      </ul>
    </nav>

    <RouterProvider router={router} />
  </StrictMode>
);
