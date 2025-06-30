import { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <div className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div className=" w-full">
      <Navbar setOpen={setOpen} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
