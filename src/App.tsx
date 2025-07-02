import Providers from './utils/Providers';

import Routers from './Routers';
// import SendData from './components/PostForm';

function App() {
  return (
    <Providers>
      <Routers />

      {/* <SendData /> */}
    </Providers>
  );
}

export default App;
