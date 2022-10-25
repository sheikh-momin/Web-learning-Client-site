
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
