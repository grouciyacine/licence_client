import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Login from './screens/login/Login';
import Register from './screens/register/Register';
import Home from './screens/home/Home';
import New from './screens/new/New';
import Blogs from './screens/blogs/Blogs';


function App() {
  const router=createBrowserRouter([
    {
      children:[
        {
          path:'/',
          element:<Home/>
          
        },
        {
          path:'/new',
          element:<New/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/blogs',
          element:<Blogs/>
        },
      ]
    }
  ])
  return (
    <div className="App" >
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
