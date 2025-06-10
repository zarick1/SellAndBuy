import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdDetails from './pages/AdDetails';
import AddEditAd from './pages/AddEditAd';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <main className="container" style={{ marginTop: '2rem' }}>
          <Outlet />
        </main>
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'ads/:id',
        element: <AdDetails />,
      },
      {
        path: 'add-ad',
        element: <AddEditAd />,
      },
      {
        path: 'edit-ad/:id',
        element: <AddEditAd />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
