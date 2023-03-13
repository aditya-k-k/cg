import Root from "./pages/Root";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Content from "./components/Content";
const router= createBrowserRouter([
  { path:'/', element : <Root/> , children:[
    {path:'',element: <Content/>}
  ]}
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
