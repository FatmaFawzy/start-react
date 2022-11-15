
import './App.css';
import Master from './Master/Master';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Home from './Home/Home';
import About from './About/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
const myRoutes = createBrowserRouter([
  {
    path: '/', element: <Master />, children: [
      { index: true, element: <Home/> },

      { path: 'about', element: <About/> },
      { path: 'contact', element: <Contact/> },
      { path: 'portfolio', element: <Portfolio/> },
      { path: '*', element: <NotFound /> }

    ]
  }
])

function App() {
  return (
    <div className="App">
        <RouterProvider router={myRoutes} />
    </div>
  );
}

export default App;
