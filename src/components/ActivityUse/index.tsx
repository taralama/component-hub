import { Activity, useState } from 'react';
import Button from '../Button';

const UseActivity = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-amber-600 font-bold underline text-3xl">
          Activity use()
        </h1>

        <Button
          type="button"
          btnText="Show"
          variant="green"
          className="cursor-pointer mt-6"
          onClick={() => setIsVisible((prev) => !prev)}
        />

        {isVisible && <h1>asdf</h1>}
        <Activity mode={isVisible ? 'visible' : 'hidden'}>
          <h1>This is visible this is visible in the most of the cases</h1>
        </Activity>
      </div>{' '}
    </div>
  );
};

export default UseActivity;
