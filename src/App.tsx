import Header from './Header';
import './index.css';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Header />
      <div className='App'>
        <Outlet />
      </div>
    </>
  )
}

export default App
{/* <Header />
      <main>
        <Outlet />
      </main>
      <footer>
      </footer> */}