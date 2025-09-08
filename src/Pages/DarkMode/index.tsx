import { useContext, useEffect, useRef } from 'react';
import Switch from '../../components/Switch';
import { DarkContext } from '../../context/userDataContext';

const DarkMode = () => {
  const { isDark } = useContext(DarkContext);

  console.log(isDark);

  const headingRef = useRef(null);

  console.log(headingRef.current);

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    // document.getElementById('paragraph')?.classList.toggle('dark', isDark);
  }, [isDark]);
  return (
    <div>
      <Switch />

      <h1
        ref={headingRef}
        className={`whiteTitle ${isDark ? 'darkTitle' : ''}`}
      >
        adfasdf
      </h1>

      <DarkContext.Consumer>
        {(value) => <div>{value.isDark}</div>}
      </DarkContext.Consumer>

      <p>This is the play Ground for light and Dark Mode</p>
    </div>
  );
};

export default DarkMode;
