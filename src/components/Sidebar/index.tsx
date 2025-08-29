import React, { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  // console.log(open);

  const componentsList: { label: string; link: string }[] = [
    {
      label: 'Accordion',
      link: '/accordion',
    },
    {
      label: 'Get-method',
      link: '/gets',
    },
    {
      label: 'Post-method',
      link: '/posts',
    },
    {
      label: 'Dropdown',
      link: '/dropdown',
    },
    {
      label: 'Input',
      link: '/input',
    },
    {
      label: 'Dynamic Form',
      link: 'dynamic-form',
    },
    {
      label: 'Switch',
      link: 'switch',
    },
    {
      label: 'Hooks Example',
      link: '/hooks',
    },
    {
      label: 'Events',
      link: '/events',
    },
    {
      label: 'useReducer',
      link: '/useReducer',
    },
    {
      label: 'word compare',
      link: '/wordCompare',
    },
    {
      label: 'word compare',
      link: '/wordCompare',
    },
    {
      label: 'Todo',
      link: '/todo',
    },
  ];

  const [componentSearchName, setComponentSearchName] = useState('');
  // console.log(componentSearchName)

  const filteredComponent = componentsList.filter(({ label }) =>
    label.toLowerCase().includes(componentSearchName),
  );

  return (
    <div
      className={`bg-blue-400  border-none h-screen shadow-2xl shadow-neutral-500 overflow-hidden transition-all duration-500`}
      style={{
        width: open ? '300px' : '0px', // Controls sidebar width
      }}
    >
      <div className=" w-full">
        <span className="flex justify-end">
          <button
            className="p-2 text-white bg-red-300 rounded-full w-10"
            onClick={() => setOpen((prev) => !prev)}
          >
            X
          </button>
        </span>

        <h1 className="w-full font-bold text-center text px-10">
          Navbar Content
        </h1>
        <input
          type="text"
          className=" bg-white rounded p-2"
          placeholder="Search Components"
          onChange={(e) => setComponentSearchName(e.target.value)}
        />

        <ul className="mt-5">
          {filteredComponent.map(({ label, link }, index) => (
            <li key={index} className=" text-nowrap py-2">
              <Link className="hover:underline" to={link}>
                {index + 1}. {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
