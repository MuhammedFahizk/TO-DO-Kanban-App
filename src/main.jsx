import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/Login';
import SignUp from './Pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <App/>,
  },{
    path: '/signUp',
    element: <SignUp/>
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
</Provider>
);
