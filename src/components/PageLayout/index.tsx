import { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="relative">
      <Navbar setOpen={setOpen} />
      <Outlet />
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Layout;
