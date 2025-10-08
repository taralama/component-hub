import { useEffect, useEffectEvent, useState } from 'react';

import Button from '../Button';

const Effect = () => {
  const [count, setCount] = useState({
    clearUp: 0,
    effect: 0,
  });

  const color = 'red';

  const notification = useEffectEvent(() => {
    console.log(color);
  });

  useEffect(() => {
    console.log('Effect, count:', count);
    notification();
    return () => console.log('Cleanup, count:', count.clearUp + 1);
  }, [count]);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-amber-600 font-bold underline text-3xl">
          Activity use()
        </h1>

        <div className="mt-6 flex items-center gap-10">
          <span>
            <p>Effect : {count.effect}</p>
            <p>cleanUp: {count.clearUp}</p>
          </span>
          <Button
            btnText="Increase"
            variant="primary"
            onClick={() =>
              setCount((prev) => ({ ...prev, effect: prev.effect + 1 }))
            }
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Effect;
