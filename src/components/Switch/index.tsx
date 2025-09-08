import { useContext } from 'react';
import { DarkContext } from '../../context/userDataContext';

const Switch = () => {
  const { isDark, setIsDark } = useContext(DarkContext);

  return (
    <div>
      heading
      <label className="switch">
        <input type="checkbox" onChange={(e) => setIsDark(e.target.checked)} />
        <span className="slider">{isDark}</span>
      </label>
    </div>
  );
};

export default Switch;
