import Transition from './useTransition';
import Optimistic from './useOptimistic';
import Use from './use';
import Reducer from './useReducer';

const Hooks = () => {
  return (
    <div>
      <Optimistic />
      <Transition />
      <Use />
      <Reducer />
    </div>
  );
};

export default Hooks;
