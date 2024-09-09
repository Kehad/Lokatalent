
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Nav from './components/nav/nav';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/signUpPage';
import DetailsPage from './pages/SignUpDetailsPage';

function App() {

  return (
    <>
      <Layout>
        <Nav />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup/signup-details" element={<DetailsPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App


