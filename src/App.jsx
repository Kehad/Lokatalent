
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Nav from './components/nav/nav';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <Layout>
        <Nav />
        
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App


