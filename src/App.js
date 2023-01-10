import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import SearchBook from "./pages/SearchBook/SearchBook";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/books' element={<Books/>}></Route>
    <Route path='/search' element={<SearchBook/>}></Route>
    </Route>
  )
);

const App = () => {
  return  <RouterProvider router={router} />
 
}

export default App;
