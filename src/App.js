import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Login from './screens/login/Login';
import Register from './screens/register/Register';
import Home from './screens/home/Home';
import New from './screens/new/New';
import Blogs from './screens/blogs/Blogs';
import DD from './screens/dd/DD';
import Img from './screens/Img/Img';
import Npkard from './screens/NPKARD/Npkard';
import Ndvi from './screens/NDVI/Ndvi';
import Csv from './screens/CSV/Csv';
import Images from './screens/Images/Images';
import Curve from './screens/Curve/Curve';
import NpkCsv from './screens/npkCSV/NpkCsv';


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
        {
          path:'/dd',
          element:<DD/>
        },
        {
          path:'/ard',
          element:<Npkard/>
        },
        {
          path:'/ndvi',
          element:<Ndvi/>
        },
        {
          path:'/csv',
          element:<Csv/>
        },
        {
          path:'/image',
          element:<Images/>
        },
        {
          path:'/images',
          element:<Img/>
        },
        {
          path:'/curve',
          element:<Curve/>
        },
        {
          path:'/npk',
          element:<NpkCsv/>
        }
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
