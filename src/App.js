import './App.css';
import Header from './components/Header';
import Advertisement from './components/Advertisement';
import Cards from './components/Cards';
import { useState } from 'react';
import MenuBar from './components/MenuBar';
import { Toaster } from 'sonner';

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
    <Toaster richColors  position='top-center' closeButton/>
      <Header setOpenMenu={setOpenMenu} />
      <Advertisement />
      <Cards />
      {
        openMenu ?
          <MenuBar setOpenMenu={setOpenMenu} />
          : <></>
      }
    </>
  );
}

export default App;
