import React, { useState, useTransition } from 'react';

const Transition = () => {
  const [filteredUsers, setFilteredUsers] = useState<string[]>();

  const [isPending, startTransition] = useTransition();

  const users = Array.from({ length: 10000 }, (_, i) => `user ${i + 1}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.value;
    console.log(inputName);
    startTransition(() => {
      setFilteredUsers(users.filter((name) => name.includes(inputName)));
    });
  };

  return (
    <main>
      {' '}
      <div className="p-4">
        <h1 className="text-amber-600 font-bold underline text-3xl">
          useTransition()
        </h1>

        <div>
          <input
            onChange={handleChange}
            type="text"
            className="border mt-6 p-2 rounded "
            placeholder="Enter name"
          />
          <button
            type="submit"
            className="border mt-6 px-6 py-2 ml-3 rounded bg-green-700 text-white hover:cursor-pointer"
          >
            click
          </button>
        </div>
        {isPending ? (
          <div>Loading</div>
        ) : (
          <ul className="mt-6">
            {filteredUsers?.map((name, index) => {
              return <li key={index}>{name} </li>;
            })}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Transition;
