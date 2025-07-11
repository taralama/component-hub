import React, { Suspense, use } from 'react';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function WaitComponent() {
  use(sleep(200)); // Suspends for 2 seconds
  return <div className="mt-6">Wait completed ✅</div>;
}

const Use = () => {
  return (
    <main className="p-4 mt-6">
      <h1 className="text-amber-600 font-bold underline text-3xl">use()</h1>{' '}
      <Suspense fallback={<div className="mt-6">Loading...</div>}>
        <WaitComponent />
      </Suspense>
    </main>
  );
};

export default Use;
