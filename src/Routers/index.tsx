import { Route, Routes } from 'react-router-dom';
import Layout from '../components/PageLayout';
import Home from '../Pages/Home';
import SendData from '../components/PostForm';
import { DynamicFormInput } from '../components';
import Switch from '../components/Switch';

const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<SendData />} />
        <Route path="/dynamic-form" element={<DynamicFormInput />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Route>
    </Routes>
  );
};

export default Routers;
