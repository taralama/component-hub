import React, { SetStateAction } from 'react';

const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(open);

  return (
    <div
      className={`bg-blue-500 h-screen top-0 ${
        open ? 'max-w-60' : 'max-w-0  opacity-45'
      }  duration-500 `}
    >
      <button onClick={() => setOpen((prev) => !prev)}>close</button>
    </div>
  );
};

export default Sidebar;
