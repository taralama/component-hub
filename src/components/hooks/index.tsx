import Transition from './useTransition';
import Optimistic from './useOptimistic';
import Use from './use';
import Reducer from './useReducer';
import UseActivity from '../ActivityUse';
import { UseEffectEvent } from '..';

const Hooks = () => {
  return (
    <div>
      <Optimistic />
      <Transition />
      <Use />
      <Reducer />
      <UseActivity />
      <UseEffectEvent />
    </div>
  );
};

export default Hooks;
