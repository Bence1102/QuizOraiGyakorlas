import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './App.css'
import Layout from './pages/Layout.jsx';
import PublicPage from './pages/PublicPage.jsx';
import AdminPage from './pages/AdminPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/kezdolap" replace />,
      },
      {
        path: "kezdolap",
        element: <PublicPage />,
      },
      {
        path: "ujquiz",
        element: <AdminPage />
      }
    ],
  },
  {
    path: "*",
    element: (
      <div style={{ padding: "2rem", textAllign: "center" }}>
        <h1>404 - Az oldal nem található</h1>
        <a href="/login">Vissza a főoldalra</a>
      </div>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
