import { Route, Routes } from 'react-router-dom';
import Layout from '../components/PageLayout';
import Home from '../Pages/Home';
import SendData from '../components/PostForm';

const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<SendData />} />
      </Route>
    </Routes>
  );
};

export default Routers;
