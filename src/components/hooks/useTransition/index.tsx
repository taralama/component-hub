import React from 'react';

const Transition = () => {
  return (
    <main>
      {' '}
      <div className="p-4">
        <h1 className="text-amber-600 font-bold underline text-3xl">
          useTransition()
        </h1>

        <div>
          <button
            type="submit"
            className="border mt-6 px-6 py-2 ml-3 rounded bg-green-700 text-white hover:cursor-pointer"
          >
            click
          </button>
        </div>
      </div>
    </main>
  );
};

export default Transition;
