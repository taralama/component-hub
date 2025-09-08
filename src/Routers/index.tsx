import { Route, Routes } from 'react-router-dom';
import Layout from '../components/PageLayout';
import Home from '../Pages/Home';
import SendData from '../components/PostForm';
import { DynamicFormInput } from '../components';
import Hooks from '../components/hooks';
import OldWordCompare from '../components/useRef';
import InputTypes from '../Pages/InputTypes';
import StateMangers from '../Pages/Reducer';
import { Todo } from '../Pages';
import DarkMode from '../Pages/DarkMode';

const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<SendData />} />
        <Route path="/dynamic-form" element={<DynamicFormInput />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/dark-mode" element={<DarkMode />} />
        <Route path="/wordCompare" element={<OldWordCompare />} />
        <Route path="/input" element={<InputTypes />} />
        <Route path="/useReducer" element={<StateMangers />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Route>
    </Routes>
  );
};

export default Routers;
