import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation.tsx';
import MenuButton from '../components/MenuButton/MenuButton.tsx';

function AppLayout() {
  const [open, setOpen] = useState<boolean>(false);
  const [bgActive, setBgActive] = useState<boolean>(false);

  const toggleMenu = () => {
    if (!open) {
      setOpen(true);
      setTimeout(() => setBgActive(true), 300);
    } else {
      setOpen(false);
      setTimeout(() => setBgActive(false), 300);
    }
  };

  return (
    <>
      <MenuButton bgActive={bgActive} toggle={toggleMenu} />
      <Navigation bgActive={bgActive} toggle={toggleMenu} />
      <Outlet />
    </>
  );
}

export default AppLayout;
