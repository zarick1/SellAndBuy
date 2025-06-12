import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdDetails from './pages/AdDetails';
import AddEditAd from './pages/AddEditAd';
import Error from './pages/Error';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addAdAction } from './pages/AddEditAd';
import { loader as navbarLoader } from './components/Navbar';
import { loader as homeLoader } from './pages/Home';
import { loader as adDetailsLoader } from './pages/AdDetails';
import { loader as editAddLoader } from './pages/AddEditAd';

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
    loader: navbarLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'ads/:id',
        element: <AdDetails />,
        loader: adDetailsLoader,
      },
      {
        path: 'add-ad',
        element: <AddEditAd />,
        action: addAdAction,
        loader: editAddLoader,
      },
      {
        path: 'edit-ad/:id',
        element: <AddEditAd />,
        action: addAdAction,
        loader: editAddLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
